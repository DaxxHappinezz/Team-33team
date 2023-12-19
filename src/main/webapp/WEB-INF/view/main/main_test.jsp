<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>Title</title>
    <style>
        .table-container {
            display: flex;

        }

        .table-container table {
            flex: 1;
            margin-right: 10px; /* 테이블 사이의 간격 조절 */

        }

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .image-container img {
            max-width: 100%; /* 이미지가 컨테이너를 벗어나지 않도록 최대 너비를 설정합니다. */
            max-height: 100%; /* 이미지가 컨테이너를 벗어나지 않도록 최대 높이를 설정합니다. */
        }
        caption {
            text-align: left; /* 테이블 캡션 텍스트를 왼쪽 정렬합니다. */
            margin-bottom: 10px; /* 테이블과 캡션 사이의 간격을 조절합니다. */
        }
    </style>
</head>
<body>
    <div class="image-container">
        <img src="images/main_2.png" alt="main_image">
    </div>
    <div class="table-container">

        <table width="400px">
            <caption><h4>* 입사를 환영합니다.</h4></caption>
            <tr>
                <th>이름</th>
                <th>부서</th>
                <th>입사일</th>
            </tr>
            <tr>
                <td>신영준</td>
                <td>개발 1팀</td>
                <td>2023-05-16</td>
            </tr>
            <tr>
                <td>신준혁</td>
                <td>개발 2팀</td>
                <td>2023-05-16</td>
            </tr>
            <tr>
                <td>서재철</td>
                <td>개발 3팀</td>
                <td>2023-05-16</td>
            </tr>
        </table>
        <table width="400px">
            <caption><h4>* 건의 게시판</h4></caption>
            <tr>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tr>
                <td>급여 좀 올려주세요</td>
                <td>2023-09-12 17:17:29</td>
            </tr>
            <tr>
                <td>퇴근 좀 시켜주세요</td>
                <td>2023-09-12 17:18:29</td>
            </tr>
            <tr>
                <td>자율 출근 좀 올려주세요</td>
                <td>2023-09-12 17:19:29</td>
            </tr>
        </table>
    </div>

    <div class="table-container">
        <table width="400px">
            <caption><h4>* 자유 게시판</h4></caption>
            <tr>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tr>
                <td>급여 좀 올려주세요</td>
                <td>2023-09-12 17:17:29</td>
            </tr>
            <tr>
                <td>퇴근 좀 시켜주세요</td>
                <td>2023-09-12 17:18:29</td>
            </tr>
            <tr>
                <td>자율 출근 좀 올려주세요</td>
                <td>2023-09-12 17:19:29</td>
            </tr>
        </table>
        <table width="400px">
            <caption><h4>* 익명 게시판</h4></caption>
            <tr>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tr>
                <td>급여 좀 올려주세요</td>
                <td>2023-09-12 17:17:29</td>
            </tr>
            <tr>
                <td>퇴근 좀 시켜주세요</td>
                <td>2023-09-12 17:18:29</td>
            </tr>
            <tr>
                <td>자율 출근 좀 올려주세요</td>
                <td>2023-09-12 17:19:29</td>
            </tr>
        </table>
    </div>

</body>
</html>
