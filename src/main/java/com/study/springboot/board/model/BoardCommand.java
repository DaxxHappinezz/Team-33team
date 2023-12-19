package com.study.springboot.board.model;

import lombok.Data;

@Data
public class BoardCommand {

	private int mno;
	private String name;
	private String title;
	private String content;
}
