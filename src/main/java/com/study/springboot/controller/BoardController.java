package com.study.springboot.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.study.springboot.board.dao.BoardDao;
import com.study.springboot.board.model.Board;
import com.study.springboot.board.model.BoardCommand;
import com.study.springboot.board.service.BoardPage;
import com.study.springboot.board.service.InquiryRequest;
import com.study.springboot.board.service.ListBoardService;
import com.study.springboot.board.service.NewInquiryService;
import com.study.springboot.board.service.ReadBoardService;
import com.study.springboot.member.service.MemberInfo;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class BoardController {

	@Autowired
	BoardDao boardDao;
	@Autowired
	NewInquiryService newInquiryService;
	@Autowired
	ListBoardService listService;
	@Autowired
	ReadBoardService readBoardService;


	@GetMapping("/board")
	public String insert() {
		return "board/newboardForm";

	}

	@GetMapping("/list")
	public String list(Model model, @RequestParam(value = "pageNo", required = false) String pageNoVal,HttpSession session) {
		MemberInfo memberInfo = (MemberInfo) session.getAttribute("memberInfo");
		int pageNo = 1;
		if (pageNoVal != null) {
			pageNo = Integer.parseInt(pageNoVal);
		}
		BoardPage articlePage = listService.getBoardPage(pageNo,memberInfo);
		model.addAttribute("articlePage", articlePage);
		System.out.println(articlePage);
		return "board/boardList";

	}

	@PostMapping("/write")
	@ResponseBody
	public String write(BoardCommand command, HttpSession session) {
		MemberInfo memberInfo = (MemberInfo) session.getAttribute("memberInfo");
		// 세션 정보 입력
		InquiryRequest inquiry = new InquiryRequest(command.getMno(),command.getName(), command.getTitle(), command.getContent());
		;
		System.out.println(inquiry);
		int result = newInquiryService.write(inquiry);
		if (result == 0) {
			return "false";
		}
		return "true";
	}

}
