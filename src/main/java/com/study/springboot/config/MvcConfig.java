package com.study.springboot.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.study.springboot.interceptor.LoginCheckInterceptor;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

	@Bean
	public MessageSource messageSource() {
		ResourceBundleMessageSource ms = new ResourceBundleMessageSource();
		ms.setBasenames("message.label");
		ms.setDefaultEncoding("UTF-8");
		return ms;
	}

	@Bean
	public LoginCheckInterceptor logincheckInterCeptor() {
		return new LoginCheckInterceptor();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(logincheckInterCeptor()).addPathPatterns("/board/**","/product/**","/memberList/**","/getSearchList/**","/main/**");
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("login/loginForm");
	}
//	@Override
//	public void addViewControllers(ViewControllerRegistry registry) {
//			
//		registry.addViewController("/swagger-ui/")
//		.setViewName("forward:/swagger-ui/index.html");
//	}
//	
//	@Override
//	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		registry.addResourceHandler("/swagger-ui/**")
//		.addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/")
//		.resourceChain(false);
//		
//	}

}
