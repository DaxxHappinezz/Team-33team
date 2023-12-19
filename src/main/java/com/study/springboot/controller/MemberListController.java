package com.study.springboot.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.study.springboot.member.dao.MemberDao;
import com.study.springboot.member.model.Member;
import com.study.springboot.member.service.MemberService;
import com.study.springboot.member.service.ReadMemberService;

import lombok.extern.slf4j.Slf4j;



@Controller
@Slf4j
public class MemberListController {
    @Autowired
	private MemberDao memberDao;

    @Autowired
    private MemberService memberService;
    
    @Autowired
    private ReadMemberService readMemberService;
   
    
    @GetMapping("/memberList")
    public String listMembers(Model model,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        int totalMemberCount = memberDao.getTotalMemberCount();
        int totalPages = (int) Math.ceil((double) totalMemberCount / size);

        List<Member> members = memberDao.listAll(page, size);
        model.addAttribute("members", members);
        model.addAttribute("page", page);
        model.addAttribute("size", size);
        model.addAttribute("totalPages", totalPages);

        log.info("Listing members: {}", members);
        System.out.println(members);
        return "/member/memberList"; 
    }
    
    @GetMapping("/getSearchList")
    public String getSearchList(@RequestParam("type") String type,
    								   @RequestParam("keyword") String keyword, 
    								   Model model){
    	List<Member> members = memberService.searchMembers(type, keyword);
    	model.addAttribute("members", members);
    	return "/member/memberList";
    }

    @GetMapping("/readMember")
    public String memberDetail(@RequestParam("mno") Long mno, Model model) {
        // mno를 사용하여 해당 회원 정보를 조회하고 model에 저장
    	
    	
        Member member = readMemberService.readMember(mno);
        model.addAttribute("member", member);
        
        return "member/readMember"; // 회원 상세 정보 페이지로 이동
    }
    

    


    
    
    

}
