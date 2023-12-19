package com.study.springboot.board.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.study.springboot.board.dao.BoardDao;
import com.study.springboot.board.model.Board;

//private int bno;
//private int empno;
//private String title;
//private String content;
//private Date date;
@Repository
public class NewInquiryService {

	@Autowired
	private BoardDao boardDao;

	@Transactional
	public Integer write(InquiryRequest req) {
		Board board = toInquiry(req);
		Board saveBoard = boardDao.insert(board);
		if (saveBoard == null) {
			throw new RuntimeException("Fail to insert Inquiry ");
		}

		return saveBoard.getBno();
	}

	public Board toInquiry(InquiryRequest req) {

		Date now = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return new Board(0, req.getMno(), req.getTitle(), req.getContent(), sdf.format(now));
	}
}
