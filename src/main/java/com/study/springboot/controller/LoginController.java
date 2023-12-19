package com.study.springboot.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.study.springboot.member.service.MemberInfo;
import com.study.springboot.member.service.MemberService;
import com.study.springboot.member.service.WrongIdPasswordException;

import lombok.extern.slf4j.Slf4j;


@Controller
@RequestMapping("/login")
@Slf4j 
public class LoginController {
	
	@Autowired
    private MemberService authService;


	@GetMapping
	public String form() {
		return "login/loginForm";
	}
	
	@PostMapping
	@ResponseBody
	public boolean submit(LoginCommand loginCommand, HttpSession session) {
		try {
			MemberInfo memberInfo = authService.authenticate(loginCommand.getMno(),
															loginCommand.getPassword());
			
			// 로그인 session 테스트
			session.setAttribute("memberInfo", memberInfo);
			
			return true;
		} catch (WrongIdPasswordException e) {
			
			return false;
		}
	}
	
}
