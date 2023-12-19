package com.study.springboot.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.study.springboot.board.dao.BoardDao;
import com.study.springboot.board.model.Board;

@Repository
public class ReadBoardService {

	
	@Autowired
	private BoardDao boardDao;
	
	public Board getBoard(int bno) {
		
		Board board = boardDao.selectBoard(bno);
		
		if(board == null) {
			
			return null;
		}
		
		return board;
		
		
	}
	
}
