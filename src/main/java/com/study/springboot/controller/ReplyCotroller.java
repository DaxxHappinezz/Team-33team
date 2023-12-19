
package com.study.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.study.springboot.board.dao.BoardDao;
import com.study.springboot.board.model.ReplyCommand;
import com.study.springboot.board.service.BoardPage;
import com.study.springboot.board.service.ListBoardService;
import com.study.springboot.board.service.NewInquiryService;
import com.study.springboot.board.service.ReadBoardService;
import com.study.springboot.board.service.ReplyService;

@Controller
@RequestMapping("/reply")
public class ReplyCotroller {
	@Autowired
	BoardDao boardDao;
	@Autowired
	NewInquiryService newInquiryService;
	@Autowired
	ListBoardService listService;
	@Autowired
	ReadBoardService readBoardService;

	@Autowired
	private ReplyService replyService;

	@PostMapping("/Update")
	public String newReply(ReplyCommand reply) {
		replyService.replyInsert(reply);

		return "redirect:/list";

	}

}
