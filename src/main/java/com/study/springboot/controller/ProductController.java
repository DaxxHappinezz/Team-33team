package com.study.springboot.controller;

import com.study.springboot.product.lend.dao.LendDao;
import com.study.springboot.product.lend.model.LendDto;
import com.study.springboot.product.lend.model.LendInfoDto;
import com.study.springboot.product.model.ProductDto;
import com.study.springboot.product.registration.dao.RegistrationDao;
import com.study.springboot.product.registration.model.RegistrationDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/product")
@Slf4j
public class ProductController {
	@Autowired
	private RegistrationDao registrationDao;
	
	@Autowired
	private LendDao lendDao;
	
	@GetMapping("/regList")
	public String main(Model model, Integer page, Integer pageSize) {
		
		if (page == null) page = 1;
		if (pageSize == null) pageSize = 10;
		int totalCnt = registrationDao.count();
		
		Pagination pagination = new Pagination(totalCnt, page, pageSize);
		model.addAttribute("page", pagination);
		List<ProductDto> productList = registrationDao.productList();
		model.addAttribute("productList", productList);
		List<RegistrationDto> list = registrationDao.registrationList(page, pageSize);
		model.addAttribute("list", list);
		return "product/registrationList";
	}
	
	@GetMapping("/insert")
	public String addForm(ProductDto productDto, Model model) {
		List<ProductDto> productList = registrationDao.productList();
		model.addAttribute("productList", productList);
		return "product/registrationForm";
	}
	
	@PostMapping("/insert")
	public String addSubmit(@RequestParam Integer pno, Integer reg_quantity) {
		int rowCnt = registrationDao.insert(pno, reg_quantity);
		return "redirect:/product/regList";
	}

	@GetMapping("/view")
	public String lendForm(Model model, @RequestParam(required = false) Integer reg_no) {
	    if (reg_no != null) {
	        List<RegistrationDto> productInfo = registrationDao.selectProduct(reg_no);
	        model.addAttribute("productInfo", productInfo);
	        return "product/lendForm";
	    }
	    return "redirect:/product/regList";
	}
	

	@GetMapping("/lendList")
	public String lendList(Model model, Integer page, Integer pageSize) {
		if (page == null) page = 1;
		if (pageSize == null) pageSize = 10;
		int totalCnt = lendDao.count();

		Pagination pagination = new Pagination(totalCnt, page, pageSize);

		model.addAttribute("page", pagination);
		List<LendDto> lendList = lendDao.lendList(page, pageSize);
		model.addAttribute("lendList", lendList);
		return "product/lendList";
	}

	@PostMapping("/lend_submit")
	public String lendSubmit(Integer reg_no, Integer pno, String pname, Integer mno, Model model) {
		lendDao.activation(reg_no, pno, pname, mno);
		registrationDao.countDown(reg_no);
		return "redirect:/product/regList";
	}

	@GetMapping("/lend_view")
	public String lendView(Model model, Integer lend_no) {
//		if (lend_no != null) {
//			List<LendInfoDto> lendList = lendDao.selectByLend(lend_no);
//			model.addAttribute("lendList", lendList);
//			return "/product/lendView";
//		}
//		return "/product/lendList";
		List<LendInfoDto> lendList = lendDao.selectByLend(lend_no);
		model.addAttribute("lendList", lendList);
		return "product/lendView";
	}

	@PostMapping("/lend_return")
	public String lendReturn(Model model, Integer lend_no, Integer reg_no, Integer mno) {
		int rowCnt = lendDao.deactivation(lend_no, mno);
		if (rowCnt != 1) {
			model.addAttribute("msg", "LEND_RETURN_FAIL");
			System.out.println("if문에서 오류");
			return "/product/lendForm";
		}
		registrationDao.countUp(reg_no);
		return "redirect:/product/lendList";
	}

	@GetMapping("/search")
	public String search(Model model, int pno, Integer page, Integer pageSize) {
		
		if (page == null) page = 1;
		if (pageSize == null) pageSize = 10;
		int totalCnt = registrationDao.searchCnt(pno);
		List<ProductDto> productList = registrationDao.productList();
		model.addAttribute("productList", productList);
		Pagination pagination = new Pagination(totalCnt, page, pageSize);
		model.addAttribute("page", pagination);
		
		List<RegistrationDto> list = registrationDao.searchList(pno, page, pageSize);
		model.addAttribute("list", list);
		
		return "product/registrationList";
	}

}
