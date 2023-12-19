package com.study.springboot.member.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.study.springboot.member.model.Department;
import com.study.springboot.member.model.Member;


@Repository
public class MemberDao {


	@Autowired
	private JdbcTemplate jdbcTemplate;


	public Member selectByMno(Long Mno) {
		List<Member> results = jdbcTemplate.query(
				"select * from MEMBER where mno = ?",
				new RowMapper<Member>() {
					@Override
					public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
						Member member = new Member(
								rs.getLong("mno"), 
								rs.getString("NAME"),
								rs.getString("PASSWORD"),
								rs.getString("PHONE"), 
								rs.getTimestamp("hiredate").toLocalDateTime(), 
								rs.getString("job"), rs.getInt("deptno"));
								
						
						
						member.setMno(rs.getLong("mno"));
						return member;
					}
				}, Mno);

		return results.isEmpty() ? null : results.get(0);
	}
	
	
	// 회원가입 사용 
	public void insertMember(Member member) {
	    KeyHolder keyHolder = new GeneratedKeyHolder();
	    jdbcTemplate.update(new PreparedStatementCreator() {
	        @Override
	        public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
	        
	            PreparedStatement pstmt = con.prepareStatement(
	                    "INSERT INTO member (name, password, phone, job, deptno) " +
	                            "VALUES (?, ?, ?, ?, ?)",
	                    new String[]{"mno"}); // 자동 생성된 mno 값을 얻기 위해 컬럼명을 지정

	            // 인덱스 파라미터 값 설정
	            pstmt.setString(1, member.getName());
	            pstmt.setString(2, member.getPassword());
	            pstmt.setString(3, member.getPhone());
	       
	            pstmt.setString(4, member.getJob());
	            
	            if (member.getDeptno() != null) {
	                pstmt.setInt(5, member.getDeptno());
	            } else {
	                pstmt.setNull(5, Types.INTEGER);
	            }

	            
	            return pstmt;
	        }
	    }, keyHolder);

	    Number generatedMno = keyHolder.getKey();
	    member.setMno((long) generatedMno.intValue());
	}
	// 다음 사번 가져오기 회원가입 기능 사용
	public int getNextMno() {
		String sql = "SELECT MAX(mno)+ 1 FROM member";
        Integer nextMno = jdbcTemplate.queryForObject(sql, Integer.class);
        return nextMno;
	
	}
	

	// 사원 목록 출력
	public List<Member> listAll(int page, int size) {
	    int offset = (page - 1) * size;
	    String sql = "SELECT m.mno, m.name, m.phone, m.hiredate, m.job, d.dname, d.loc " +
	                 "FROM member m " +
	                 "LEFT JOIN department d ON m.deptno = d.deptno " +
	                 "LIMIT ?, ?";

	    return jdbcTemplate.query(
	        new PreparedStatementCreator() {
	            @Override
	            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
	                PreparedStatement ps = con.prepareStatement(sql);
	                ps.setInt(1, offset);
	                ps.setInt(2, size);
	                return ps;
	            }
	        },
	        new RowMapper<Member>() {
	            @Override
	            public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
	                Member member = new Member();
	                member.setMno((long) rs.getInt("mno"));
	                member.setName(rs.getString("name"));
	                member.setPhone(rs.getString("phone"));

	                // hiredate 컬럼을 LocalDateTime으로 변환
	                Timestamp hiredateTimestamp = rs.getTimestamp("hiredate");
	                member.setHiredate(hiredateTimestamp != null ? hiredateTimestamp.toLocalDateTime() : null);

	                member.setJob(rs.getString("job"));

	                member.setDname(rs.getString("dname"));
	                member.setLoc(rs.getString("loc"));

	                return member;
	            }
	        });
	}
	// 페이징 기능에 사용
	public int getTotalMemberCount() {
	    String sql = "SELECT COUNT(*) FROM member";
	    return jdbcTemplate.queryForObject(sql, Integer.class);
	}
	


	// 검색
	public List<Member> searchMembers(String type, String keyword) {
	    // 검색 쿼리 작성 (예: 이름으로 검색)
	    String sql = "SELECT m.mno, m.name, m.phone, m.hiredate, m.job, d.dname, d.loc " +
	                 "FROM member m " +
	                 "LEFT JOIN department d ON m.deptno = d.deptno " +
	                 "WHERE " + type + " LIKE ?";

	    String likeKeyword = "%" + keyword + "%";

	    return jdbcTemplate.query(
	        new PreparedStatementCreator() {
	            @Override
	            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
	                PreparedStatement ps = con.prepareStatement(sql);
	                ps.setString(1, likeKeyword);
	                return ps;
	            }
	        },
	        new RowMapper<Member>() {
	            @Override
	            public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
	                Member member = new Member();
	                member.setMno((long) rs.getInt("mno"));
	                member.setName(rs.getString("name"));
	                member.setPhone(rs.getString("phone"));

	                // hiredate 컬럼을 LocalDateTime으로 변환
	                Timestamp hiredateTimestamp = rs.getTimestamp("hiredate");
	                member.setHiredate(hiredateTimestamp != null ? hiredateTimestamp.toLocalDateTime() : null);

	                member.setJob(rs.getString("job"));

	                member.setDname(rs.getString("dname"));
	                member.setLoc(rs.getString("loc"));

	                return member;
	            }
	        });
	}



	public Department selectByDeptno(int deptno) {
		List<Department> results = jdbcTemplate.query(
				"select * from department where deptno = ?",
				new RowMapper<Department>() {
					@Override
					public Department mapRow(ResultSet rs, int rowNum) throws SQLException {
						Department department = new Department(
								rs.getInt("deptno"),
								rs.getString("dname"),
								rs.getString("loc"));
							
						return department;
					}
				}, deptno);

		return results.isEmpty() ? null : results.get(0);
	}



//	public void update(Member member) {
//	jdbcTemplate.update(
//			"update MEMBER set phone = ?, job = ? where mno = ?",
//			member.getPhone(), member.getJob());
//}


	
	
//	public void insert(Member member) {
//		KeyHolder keyHolder = new GeneratedKeyHolder();
//		jdbcTemplate.update(new PreparedStatementCreator() {
//			@Override
//			public PreparedStatement createPreparedStatement(Connection con)
//					throws SQLException {
//				// 파라미터로 전달받은 Connection을 이용해서 PreparedStatement 생성
//				PreparedStatement pstmt = con.prepareStatement(
//						"insert into MEMBER (EMAIL, PASSWORD, NAME, REGDATE) " +
//						"values (?, ?, ?, ?)",
//						new String[] { "ID" });
//				// 인덱스 파라미터 값 설정
//				
//				pstmt.setString(2, member.getPassword());
//				pstmt.setString(3, member.getName());
//				pstmt.setTimestamp(4,
//						Timestamp.valueOf(member.getRegisterDateTime()));
//				// 생성한 PreparedStatement 객체 리턴
//				return pstmt;
//			}
//		}, keyHolder);
//		Number keyValue = keyHolder.getKey();
//		member.setMno(keyValue.longValue());
//	}
//

//

//



}
