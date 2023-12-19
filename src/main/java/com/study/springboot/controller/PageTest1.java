package com.study.springboot.controller;

public class PageTest1 {

    public static void main(String[] args) {
        Pagination page = new Pagination(388, 39);
        System.out.println(page);
        page.print();

    }
}
