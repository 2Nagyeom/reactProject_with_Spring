import React from 'react';
import styled, { css } from 'styled-components';

const Body = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background : rgb(239, 242, 245);
`;

const HeadLogo = styled.div`
        background : rgb(239, 242, 245);
`;

const Logotext = styled.p`
    font-size : 100px;
    font-weight : bold;
    text-align : center;
    color : orange;
`;

const ContentDiv = styled.div`
   margin:0 auto; 
`;

const ContentBox = styled.div` 
    margin:0 auto; 
    background: white;
    width: 400px;
    height: auto;
    border-radius : 2%;
    box-shadow: 1px 2px 6px gray;
    text-align : center;
`;

const ContentmainText = styled.p`
    color : black;
    font-size : 20px;
    display : block;
    padding-top : 5%;
    padding-bottom : 5%;
`;

const Contentnum = styled.input`
    width: 300px;
    height : 35px;
    margin-bottom : 2%;
    border: solid 2px orange;
    border-radius : 5px;
`;

const Contentpwd = styled.input`
    width: 300px;
    height : 35px;
    margin-bottom : 5%;
    border: solid 2px orange;
    border-radius : 5px;
`;

const LoginButton = styled.button`
    width: 310px;
    height : 40px;
    margin-bottom : 3%;
    background: orange;
    color : white;
    font-weight : bold;
    border-radius : 5px;
    border : 2px solid orange;
`;

const ContentnotIdText = styled.p`
    color : orange;
    font-size : 15px;
    display : block;
    font-weight : bold;
`;

const ContentorText = styled.p`
    color : gray;
    font-size : 15px;
    display : block;
    font-weight : bold;
`;

const SignupButton = styled.button`
    width: 200px;
    height : 40px;
    margin-bottom : 10%;
    background: #fe6b6b;
    color : white;
    font-weight : bold;
    border-radius : 5px;
    border : 2px solid #fe6b6b;
`;



function Login() {
    return (
        <Body>
            <HeadLogo>
                <Logotext>ShowBlog</Logotext>
            </HeadLogo>
            <ContentBox>
                <ContentmainText>ShowBlog에 로그인</ContentmainText>
                <Contentnum placeholder='전화번호 입력'></Contentnum>
                <Contentpwd placeholder='비밀번호 입력' type="password"></Contentpwd>
                <LoginButton>로그인하기</LoginButton>
                <ContentnotIdText>계정을 잊으셨나요?</ContentnotIdText>
                <ContentorText>-----------------------또는-----------------------</ContentorText>
                <SignupButton>새계정 만들기</SignupButton>
            </ContentBox>
        </Body>




    );
}

export default Login;
