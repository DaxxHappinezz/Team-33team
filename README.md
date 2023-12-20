# RMS(Resource Management System) 

## 💡 프로젝트 설명
- 전산팀에서 사용하는 인적, 물적 자원 관리 시스템
- 타 부서 인원이 전산팀에 1:1 문의로 장비 반입/출, 유지보수 요청 가능

## ⚙️ 기술 스택
- Spring Boot 2.7.15
- OracleJDK 11
- MySQL 8.0.33
- Aphache Tomcat 9.0.75

## 🔎 주요 기능

### 1. 사원 관리
- 사원 등록 및 현황은 전산팀으로 소속되었을 때만 접근 가능
- 사번, 이름, 부서명 입력 시 사원 검색 기능 구현
- 사번 클릭 시 해당 사원의 상세 정보 확인 가능
- 사원 등록 시 입력한 휴대폰 뒷 번호 4자리를 초기 비밀 번호로 자동 설정

### 2. 자원 관리 ( this.me )
- 자원 관리 메뉴는 전산팀으로 소속되었을 때만 접근 가능
- 자산 검색을 통해 현재 보유 여부 확인 가능
- 자산 클릭 후 사번 입력 시 해당 사원에게 자산 등록됨
- 보유 여부에 따라 O, X 표기하여 시인성 증대
  
### 3. 요청 게시판
- 요청 게시판은 전산팀 외 소속되었을 때만 작성 가능
- 게시글은 자신이 작성한 것만 확인 가능
- 전산팀 소속은 요청 게시글 확인 및 답글 등록 가능
- 답글 등록 여부에 따라 O, X 표기하여 시인성 증대

## 프로젝트 참여자

|이름|역할|구현한 기능|
|--|--|--|
|신**|팀장|요청 게시판, 답글|
|신**|팀원|로그인, 사원 관리|
|서재철|팀원|전산 장비 관리(등록, 반출)|