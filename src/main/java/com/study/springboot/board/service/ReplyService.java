package com.study.springboot.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.study.springboot.board.dao.BoardDao;
import com.study.springboot.board.model.ReplyCommand;

@Repository
public class ReplyService {

	@Autowired
	private BoardDao boardDao;

	public boolean replyInsert(ReplyCommand reply) {

		if (reply.getBno() == 0 || reply.getContent() == null) {
			return false;
		}

		boardDao.replyUpdate(reply);

		return true;
	}

}
