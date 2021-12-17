import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from 'react-modal';

const Body = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background : rgb(239, 242, 245);
`;

// const HeadLogo = styled.div`
//         background : rgb(239, 242, 245);
// `;

// const Logotext = styled.p`
//     font-size : 100px;
//     font-weight : bold;
//     text-align : center;
//     color : orange;
// `;

// const ContentDiv = styled.div`
//    margin:0 auto; 
// `;

// const ContentBox = styled.div` 
//     margin:0 auto; 
//     background: white;
//     width: 400px;
//     height: auto;
//     border-radius : 2%;
//     box-shadow: 1px 2px 6px gray;
//     text-align : center;
// `;

// const ContentmainText = styled.p`
//     color : black;
//     font-size : 20px;
//     display : block;
//     padding-top : 5%;
//     padding-bottom : 5%;
// `;

// const Contentnum = styled.input`
//     width: 300px;
//     height : 35px;
//     margin-bottom : 2%;
//     border: solid 2px #a5a7a3;
//     background-color: rgb(239, 242, 245);
//     border-radius : 5px;
// `;

// const Contentpwd = styled.input`
//     width: 300px;
//     height : 35px;
//     margin-bottom : 5%;
//     border: solid 2px #a5a7a3;
//     background-color: rgb(239, 242, 245);
//     border-radius : 5px;
// `;

// const LoginButton = styled.button`
//     width: 310px;
//     height : 40px;
//     margin-bottom : 3%;
//     background: orange;
//     color : white;
//     font-weight : bold;
//     border-radius : 5px;
//     border : 2px solid orange;
// `;

// const ContentnotIdText = styled.p`
//     color : orange;
//     font-size : 15px;
//     display : block;
//     font-weight : bold;
// `;

// const ContentorText = styled.p`
//     color : gray;
//     font-size : 15px;
//     display : block;
//     font-weight : bold;
// `;

const SignupButton = styled.button`
    width: 145px;
    height : 40px;
    margin-bottom : 10%;
    margin-right : 3%;
    background: #fe6b6b;
    color : white;
    font-weight : bold;
    border-radius : 5px;
    border : 2px solid #fe6b6b;
`;

const BackButton = styled.button`
    width: 145px;
    height : 40px;
    margin-bottom : 10%;
    background : #a5a7a3;
    color : white;
    font-weight : bold;
    border-radius : 5px;
    border: solid 2px #a5a7a3;

`;

const BoardMakeLogo = styled.div`
    width: 100%;
    height: 50px;
    font-weight: bold;
    text-align: center;
    font-Size: 20px;
`;

const BoardMakeLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #a5a7a3;
    margin-top : -4px;
    `;

const BoardMakeName = styled.p`
    padding-left : 10px;
    font-size : 15px;
    `;

const BoardMakeDiv = styled.div`
    width: 95%;
    height : 70px;
    padding-left : 10px;
    
    `;

const BoardMakeText = styled.input`
    width : 95%;
    height : 100px;
    border-top : none;
    border-left : none;
    border-right : none;
    border-bottom : none;
    margin-bottom : 13%;
    `;

const BoardAddItemDiv = styled.div`
    width : 100%;
    height : 50px;
    border-radius : 5px;
    border: solid 2px #a5a7a3;
    display: flex;
    `;

const BoardAddItemText = styled.p`
    font-size : 15px;
    font-weight : bold;
    padding-left : 20px;
    margin-top : 15px;
    `;

const BoardAddItemButton = styled.button`
    margin-left : 70%;
    margin-top : 10px;
    height : 30px;
    border-radius : 10%;
    background-color : orange;
    border : orange;
    font-weight : bold;
    `

const BoardMakeButtonDiv = styled.div`
    display: flex;
    padding-left : 30%;
    padding-top : 30%;
    align-items : center;
`;






function Board() {
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    return (
        <Body>
            <SignupButton onClick={() => setModalIsOpen(true)}> Modal Open</SignupButton>
            <Modal style={{
                overlay: {
                    position: 'fixed',
                    top: 100,
                    left: 300,
                    right: 300,
                    bottom: 100,
                    background: 'rgba(0,0,0,0)'
                }
            }} isOpen={ModalIsOpen}>
                <BoardMakeLogo>게시물 만들기</BoardMakeLogo>
                <BoardMakeLine></BoardMakeLine>
                <BoardMakeName>안녕</BoardMakeName>
                <BoardMakeDiv>
                    <BoardMakeText placeholder='지금 무슨 생각을 하고 있나요?' />
                    <BoardAddItemDiv>
                        <BoardAddItemText>게시물 추가</BoardAddItemText>
                        <BoardAddItemButton>파일첨부 하기</BoardAddItemButton>
                    </BoardAddItemDiv>
                </BoardMakeDiv>
                <BoardMakeButtonDiv>
                    <SignupButton onClick={() => setModalIsOpen(false)}>게시하기</SignupButton>
                    <BackButton onClick={() => setModalIsOpen(false)}>뒤로가기</BackButton>
                </BoardMakeButtonDiv>
            </Modal>
        </Body>
    )
}

export default Board;
