import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import X from '../img/X.png';
import { useNavigate, withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';

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

const ContentBox = styled.div` 
    margin:0 auto; 
    background: white;
    width: 400px;
    height: auto;
    border-radius : 2%;
    box-shadow: 1px 2px 6px gray;
    text-align : center;
    `;

const ContentDiv = styled.div`
    padding-bottom : 20px;
`;

const Xdiv = styled.div`
    display: flex;
    margin-bottom : -60px;
    align-items : center;
`;

const ContentmainText = styled.p`
    padding-left : 10px;
    color : black;
    font-size : 40px;
    font-weight : bold;
    display : block;
    margin-right : 210px;
    text-align : left;
`;

const ContentaddText = styled.p`
    padding-left : 10px;
    color : gray;
    font-size : 20px;
    display : block;
    text-align : left;
`;

const Content__ = styled.div`
    weight : 600px;
    height : 1px;
    background-color : #a5a7a3;
`;

const ContentFirstname = styled.input`
    width: 135px;
    height : 35px;
    margin-bottom : 2%;
    border: solid 2px #a5a7a3;
    background-color: rgb(239, 242, 245);
    border-radius : 5px;
    margin-right : 3%;
`;

const ContentSecname = styled.input`
    width: 135px;
    height : 35px;
    margin-bottom : 2%;
    border: solid 2px #a5a7a3;
    background-color: rgb(239, 242, 245);
    border-radius : 5px;
    margin-left : 2%;
`;

const Contentnum = styled.input`
    width: 300px;
    height : 35px;
    margin-bottom : 2%;
    border: solid 2px #a5a7a3;
    background-color: rgb(239, 242, 245);
    border-radius : 5px;
`;

const Contentemail = styled.input`
    width: 300px;
    height : 35px;
    margin-bottom : 2%;
    border: solid 2px #a5a7a3;
    background-color: rgb(239, 242, 245);
    border-radius : 5px;
`;

const Contentpwd = styled.input`
    width: 300px;
    height : 35px;
    margin-bottom : 2%;
    border: solid 2px #a5a7a3;
    background-color: rgb(239, 242, 245);
    border-radius : 5px;
`;

const Contentpwdcheck = styled.input`
    width: 300px;
    height : 35px;
    margin-bottom : 10%;
    border: solid 2px #a5a7a3;
    background-color: rgb(239, 242, 245);
    border-radius : 5px;
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



function SignUp({ props }) {

    const [input, setinput] = useState({
        name: '',
        num: '',
        pwd: '',
        pwd_check: '',
        email: '',
    });

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        });
    };

    let navigation = useNavigate()
    function register(params) {
        navigation('/')
    }

    function back(params) {
        navigation('/')
    }

    useEffect(() => {
        console.log(input);

    }, [input])

    // pwd??? ????????????????????? ??????????????? if??? ??????
    function userInput() {
        if (input.pwd == input.pwd_check) {
            axios.post('http://sunsalman.iptime.org:8080/join', {
                num: input.num,
                name: input.name,
                pwd: input.pwd,
                email: input.email,
                headers: {
                    "Content-Type": 'application/json'
                }
            })
                .then(function (response) {
                    console.log(response.data);
                    navigation('/');
                    alert('???????????? ???????????????!');
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            alert("??????????????? ????????????. ?????? ??? ??? ??????????????????! ");
        }

    }

    // useEffect(() => { userInput(); })

    return (
        <Body>
            <HeadLogo>
                <Logotext>ShowBlog</Logotext>
            </HeadLogo>
            <ContentBox>
                <ContentDiv>
                    <Xdiv>
                        <ContentmainText>????????????</ContentmainText>
                        <img src={X} style={{
                            width: 25,
                            height: 25,
                        }} onClick={back} />
                    </Xdiv>
                    <ContentaddText>?????? ????????? ????????????.</ContentaddText>
                    <Content__></Content__>
                </ContentDiv>
                <ContentFirstname name="name" placeholder='?????? ??????' onChange={onChange}></ContentFirstname>
                <Contentnum name="num" placeholder='???????????? ??????' onChange={onChange}></Contentnum>
                <Contentemail name="email" placeholder='????????? ??????' onChange={onChange}></Contentemail>
                <Contentpwd name="pwd" placeholder='???????????? ??????' type="password" onChange={onChange}></Contentpwd>
                <Contentpwdcheck name="pwd_check" placeholder='???????????? ??????' type="password" onChange={onChange}></Contentpwdcheck>
                <SignupButton onClick={userInput}>??????????????????</SignupButton>
            </ContentBox>
        </Body >
    );
}

export default SignUp;
