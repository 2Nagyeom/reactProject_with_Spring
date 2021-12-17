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

// 게시물 페이지 메인 로고 '게시물 작성하기'
const BoardMakeLogo = styled.div`
    width: 100%;
    height: 50px;
    font-weight: bold;
    text-align: center;
    font-Size: 20px;
`;

// 게시물 로고랑 작성 분리선
const BoardMakeLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #a5a7a3;
    margin-top : -4px;
    `;

// 작성자 이름표시
const BoardMakeName = styled.p`
    padding-left : 10px;
    font-size : 15px;
    `;

// 텍스트할 디브 스타일
const BoardMakeDiv = styled.div`
    width: 95%;
    height : 70px;
    padding-left : 10px;
    
    `;

// 텍스트 치기
const BoardMakeText = styled.input`
    width : 95%;
    height : 100px;
    border-top : none;
    border-left : none;
    border-right : none;
    border-bottom : none;
    margin-bottom : 13%;
    `;

// 파일첨부 버튼 누르는 디브
const BoardAddItemDiv = styled.div`
    width : 100%;
    height : 50px;
    border-radius : 5px;
    border: solid 2px #a5a7a3;
    display: flex;
    `;

// 파일첨부 옆 텍스트 
const BoardAddItemText = styled.p`
    font-size : 15px;
    font-weight : bold;
    padding-left : 20px;
    margin-top : 15px;
    `;

// 파일첨부하는 버튼 디브
const BoardMakeButtonDiv = styled.div`
    display: flex;
    padding-left : 30%;
    padding-top : 30%;
    align-items : center;
`;


// 파일첨부하기 버튼
const BoardAddItemButton = styled.button`
    margin-left : 70%;
    margin-top : 10px;
    height : 30px;
    border-radius : 10%;
    background-color : orange;
    border : orange;
    font-weight : bold;
    `

const BoardMakeYesButton = styled.button`
    width: 145px;
    height : 40px;
    margin-bottom : 10%;
    margin-left : 5px;
    background: #f7c487;
    color: orange;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #f7c487;
`;


const BoardMakeNoButton = styled.button`
    width: 145px;
    height : 40px;
    margin-bottom : 10%;
    margin-left : 5px;
    background: #c3bdbb;
    color : black;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #c3bdbb;
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
                    <BoardMakeYesButton onClick={() => setModalIsOpen(false)}>하기</BoardMakeYesButton>
                    <BoardMakeNoButton onClick={() => setModalIsOpen(false)}>뒤로가기</BoardMakeNoButton>
                </BoardMakeButtonDiv>
            </Modal>
        </Body>
    )
}

export default Board;
