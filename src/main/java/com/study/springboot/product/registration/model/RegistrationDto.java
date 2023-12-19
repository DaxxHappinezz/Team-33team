package com.study.springboot.product.registration.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegistrationDto {
	private Integer reg_no;
	private Integer pno;
	private String pname;
	private Date reg_date;
	private Date due_date;
	private Integer isLend;
}
