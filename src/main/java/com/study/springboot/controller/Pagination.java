package com.study.springboot.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Pagination {
	private int totalCnt;		// 
	private int page;
	private int totalPage;
	private int pageSize;
	private final int naviSize = 10;
	private int beginPage;
	private int endPage;
	private boolean showPrev = false;
	private boolean showNext;
	
	
	public Pagination(int totalCnt, Integer page) {
		this(totalCnt, page, 10);
	}

	public Pagination(int totalCnt, Integer page, Integer pageSize) {
		this.totalCnt = totalCnt;
		this.page = page;
		this.pageSize = pageSize;
		
		totalPage = (int) Math.ceil(totalCnt / (double)pageSize);
		beginPage = (page - 1) / naviSize * naviSize + 1;
		endPage = Math.min(beginPage + naviSize -1, totalPage);
		showPrev = beginPage != 1;
		showNext = endPage != totalPage;
	}
	
	void print() {
		System.out.print((showPrev == true) ? "<" : "");
		for (int i = beginPage; i<=endPage; i++) {
			System.out.print(" "+i);
		}
		System.out.print((showNext == true) ? " >" : "");
	}

	@Override
	public String toString() {
		return "Pagination [totalCnt=" + totalCnt + ", page=" + page + ", totalPage=" + totalPage + ", pageSize="
				+ pageSize + ", naviSize=" + naviSize + ", beginPage=" + beginPage + ", endPage=" + endPage
				+ ", showPrev=" + showPrev + ", showNext=" + showNext + "]";
	}
	
}
