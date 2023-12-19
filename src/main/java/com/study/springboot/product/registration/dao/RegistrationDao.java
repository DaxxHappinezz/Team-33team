package com.study.springboot.product.registration.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.study.springboot.product.model.ProductDto;
import com.study.springboot.product.registration.model.RegistrationDto;

@Repository
public class RegistrationDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public int count() {
		String sql = "select count(*) from registration_list";
		return this.jdbcTemplate.queryForObject(sql, Integer.class);
	}
	
	public int searchCnt(int pno) {
		String sql = "select count(*) from "
				+ "(select reg_no, rl.pno, p.pname, reg_date, due_date, isLend "
				+ "from registration_list rl join product p where rl.pno = p.pno "
				+ "and p.pno = ?) as searchCnt";
		return this.jdbcTemplate.queryForObject(sql, Integer.class, pno);
	}
	
	public List<ProductDto> productList() {
		String sql = "select pno, pname from product";
		List<ProductDto> result = this.jdbcTemplate.query(sql, (rs, rowNum)-> {
			ProductDto productDto = new ProductDto(
					rs.getInt("pno"), rs.getString("pname"));
			return productDto;
		});
		return result;
	}
	
	public List<RegistrationDto> registrationList(Integer page, Integer pageSize) {
		String sql = "select reg_no, rl.pno, p.pname, reg_date, due_date, isLend "
				+ "from registration_list rl join product p on rl.pno = p.pno limit ?, ?";
		List<RegistrationDto> result = this.jdbcTemplate.query(sql,
				(rs, rowNum)->{
					RegistrationDto registrationDto = new RegistrationDto(
							rs.getInt("reg_no"), rs.getInt("pno"), rs.getString("pname"),
							rs.getDate("reg_date"), rs.getDate("due_date"), rs.getInt("isLend"));
					return registrationDto;
				}, (page-1) * pageSize, pageSize);
		return result;
	}
	
	public List<RegistrationDto> searchList(int pno, Integer page, Integer pageSize) {
		String sql = "select reg_no, rl.pno, p.pname, reg_date, due_date, isLend "
				+ "from registration_list rl join product p on rl.pno = p.pno where rl.pno = ? "
				+ "limit  ?, ?";
		List<RegistrationDto> result = this.jdbcTemplate.query(sql,
				(rs, rowNum)->{
					RegistrationDto registrationDto = new RegistrationDto(
							rs.getInt("reg_no"), rs.getInt("pno"), rs.getString("pname"),
							rs.getDate("reg_date"), rs.getDate("due_date"), rs.getInt("isLend"));
					return registrationDto;
				}, pno, (page-1) * pageSize, pageSize);
		return result;
	}

	public int insert(Integer pno, Integer reg_quantity) {
		String sql = "insert into registration_list (pno, reg_date, due_date) "
				+ "values (?, now(), date_add(now(), interval 5 year));";
		System.out.println("reg_quantity: "+reg_quantity);
		for (int i=1; i<reg_quantity; i++) {
			this.jdbcTemplate.update(sql, pno);
		}
		return this.jdbcTemplate.update(sql, pno);
	}
	
	public List<RegistrationDto> selectProduct(int reg_no) {
		String sql = "select reg_no, rl.pno, p.pname, reg_date, due_date, isLend "
				+ "from registration_list rl join product p on rl.pno = p.pno where reg_no = ? ";
		return this.jdbcTemplate.query(sql, 
				(rs, rowNum)->{
					RegistrationDto registrationDto = new RegistrationDto(
							rs.getInt("reg_no"), rs.getInt("pno"), rs.getString("pname"),
							rs.getDate("reg_date"), rs.getDate("due_date"), rs.getInt("isLend"));
					return registrationDto;
				},reg_no);
	}
	
	public int countDown(int reg_no) {
		String sql = "update registration_list set isLend = 0 where reg_no = ?";
		return this.jdbcTemplate.update(sql, reg_no);
	}
	
	public int countUp(int reg_no) {
		String sql = "update registration_list set isLend = 1 where reg_no = ?";
		return this.jdbcTemplate.update(sql, reg_no);
	}
	
	public void delete() {
		
	}
	
	public void update() {
		
	}
}
