import React from 'react';
import styled, { css } from 'styled-components';
import X from "./img/X.png"

// body 태그 스타일
const Body = styled.body`
    position : absolute;
    width : 100%;
    min-height : fill-available;
    background : rgb(239, 242, 245);
`;

// 왼쪽 위 로고 지정 div
const Headbar = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom : -20px;
    margin-top : -20px;
    padding-left : 10px;
`;

// 왼쪽 위 로고텍스트 스타일
const Logotext = styled.p`
    font-size : 35px;
    font-weight : bold;
    color : orange;
`;

// 로고div 제외한 모든 div의 부모 스타일
const Contentbar = styled.div`
    display: flex;
    height: 100%;
`;

// 왼쪽 사이드 div 스타일
const Leftside = styled.div`
    width : 400px;
`;

// 왼쪽 사이드 div에 들어가는 텍스트 스타일
const LeftContent = styled.div`
    padding-top : 30px;
    padding-left : 10px;
    font-size : 20px;
`;

// 가운데 div 스타일
const BoardDiv = styled.div`
    width : 850px;
    padding-top : 20px;
`;

// 캡쳐한 부분 만든 거 스타일
const ContentpwdBoard = styled.div`
    width: 95%;
    height: 220px;
    background-color : white;
    box-shadow: 1px 2px 6px #a5a7a3;
    border-radius : 2%;
    margin-bottom : 30px;
`;

// 이건 게시물 만들기 위한 버튼 위치 지정할 div 스타일
const ContentBoard = styled.div`
    width: 95%;
    height: 100px;
    background-color : white;
    box-shadow: 1px 2px 6px #a5a7a3;
    border-radius : 2%;
    margin-bottom : 30px;
    
`;

// 게시물 만들기 위한 코멘트 담을 div 스타일
const ContentBoardComentDiv = styled.div`
    height : 50px;
    display: flex;
`;

// 게시물 만들기 위한 코멘트 달기 div 스타일
const ContentBoardComent = styled.div`
    width : 94%;
    height : 30px;
    margin-left : 2%;
    margin-top : 1%;
    border-radius : 10%;
    background-color : rgb(239, 242, 245);
    color : #62605e;
    padding-left : 10px;
    line-height : 30px;
`;

// 버튼과 코멘트 사이를 구별할 line div 스타일
const ContentBoardLineDiv = styled.div`
    width : 100%;
    height : 1px;
`;

// 버튼과 코멘트 사이를 구별할 line 스타일
const ContentBoardLine = styled.div`
    width : 95%;
    height : 1px;
    margin-left : 2%;
    background-color : #c3bdbb;
`;

// 코멘트에 필요한 버튼이 있을 div 스타일
const ContentBoardButtonDiv = styled.div`
    width : 95%;
    height : 30px;
    margin-top : 1%;
    display: flex;
    text-align : center;
    `;

// 코멘트에 필요한 버튼(캡쳐한거 따라함)
const ContentBoardLiveButton = styled.button`
    width: 30%;
    height: 30px;
    margin-bottom : 10%;
    margin-left : 5%;
    background: #f513a6;
    color: #c3bdbb;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #f513a6;
    `;

// 코멘트에 필요한 버튼(이거 누르면 게시물 작성으로 감)
const ContentBoardWriteButton = styled.button`
    width: 30%;
    height: 30px;
    margin-bottom : 10%;
    margin-left : 10px;
    background: #1adf24;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #1adf24; 
    `;

// 코멘트에 필요한 버튼(캡쳐한거 따라함)
const ContentBoardFeelButton = styled.button`
    width: 30%;
    height: 30px;
    margin-bottom : 10%;
    margin-left : 10px;
    background: #f3eb0b;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #f3eb0b; 
    `;


// 데이터 가지고올 게시물 list div 스타일
const ContentBoardList = styled.div`
width: 95%;
height: 400px;
background-color : white;
box-shadow: 1px 2px 6px #a5a7a3;
border-radius : 2%;
margin-bottom : 30px;
`;

// 캡쳐한 부분 만든 거 스타일 
const LogoBoardtext = styled.p`
font-size : 15px;
font-weight : bold;
padding-left : 10px;
padding-top : 20px;
color: orange;
`;

// 캡쳐한 부분 만든 거 스타일 
const BoardBoldtext = styled.p`
font-size : 25px;
font-weight : bold;
padding-left : 10px;
padding-top : 10px;
text-align : left;
`;

// 캡쳐한 부분 만든 거 스타일 
const Boardtext = styled.p`
font-size : 15px;
padding-left : 10px;
padding-top : 10px;
margin-top : -30px;
text-align : left;
`;

// 캡쳐한 부분 만든 거 스타일 
const BoardButtonDiv = styled.div`
display: flex;
`;

// 캡쳐한 부분 만든 거 스타일 
const BoardYesButton = styled.button`
width: 49%;
height: 40px;
margin-bottom : 10%;
margin-left : 5px;
background: #f7c487;
color: orange;
font-weight : bold;
border-radius : 5px;
border: 2px solid #f7c487;
`;

// 캡쳐한 부분 만든 거 스타일 
const BoardNoButton = styled.button`
width: 49%;
height: 40px;
margin-bottom : 10%;
margin-left : 5px;
margin-right : 5px;
background: #c3bdbb;
color: black;
font-weight : bold;
border-radius : 5px;
border: 2px solid #c3bdbb;
`;

// 오른쪽 사이드 div 스타일
const Rightside = styled.div`
width: 400px;
padding-top : 15px;
padding-left : 10px;
`;

// 오른쪽 사이드 div안에 들어갈 목록에 필요한 div 스타일
const RightsidefriendBoard = styled.div`
width: 90%;
height: 130px;
background-color : white;
box-shadow: 1px 2px 6px #a5a7a3;
border-radius : 2%;
margin-bottom : 30px;
`;

// 오른쪽 사이드 줄선 나타내는 div 스타일
const RightsideLine = styled.div`
width: 100%;
height: 1px;
background-color : #c3bdbb;
margin-top : 5%;
`;

// 오른쪽 사이드 친구 신청 관한 텍스트 스타일
const FriendBoardBoldText = styled.p`
color: black;
font-size : 20px;
padding-left : 10px;
padding-top : 10px;
`;

// 오른쪽 사이드 친구 신청 관한 텍스트 스타일
const FriendBoldTextDiv = styled.div`
display: flex;
margin-top : -15px;
`;

// 오른쪽 사이드 친구 신청 관한 텍스트 스타일
const FriendBoardText = styled.p`
font-weight : bold;
font-size : 20px;
padding-left : 10px;
`;

// 오른쪽 사이드 친구 신청 관한 버튼 스타일
const FriendButton = styled.button`
width: 45%;
height: 30px;
margin-bottom : 10%;
margin-left : 5px;
margin-right : 5px;
background: orange;
color: white;
font-weight : bold;
border-radius : 5px;
border: 2px solid orange;
`;

// 오른쪽 사이드 친구 신청 관한 버튼 스타일
const FriendNoButton = styled.button`
width: 45%;
height: 30px;
margin-bottom : 10%;
margin-left : 5px;
margin-right : 5px;
background: #c3bdbb;
color: black;
font-weight : bold;
border-radius : 5px;
border: 2px solid #c3bdbb;
`;

// 오른쪽 사이드 친구 연락처 관한 텍스트 스타일
const NumBoardText = styled.p`
font-size : 20px;
font-weight : bold;
padding-left : 10px;
color: #918d8c;

`;


function Main() {
    return (
        <Body>
            <Headbar>
                <Logotext>ShowBlog</Logotext>
            </Headbar>
            <Contentbar>
                <Leftside>
                    <LeftContent>name</LeftContent>
                    <LeftContent>친구</LeftContent>
                    <LeftContent>show</LeftContent>
                    <LeftContent>그룹</LeftContent>
                    <LeftContent>과거의 오늘</LeftContent>
                    <LeftContent>이벤트</LeftContent>
                    <LeftContent>저장됌</LeftContent>
                </Leftside>
                <BoardDiv>
                    <ContentpwdBoard>
                        <LogoBoardtext>ShowBlog</LogoBoardtext>
                        <BoardBoldtext>비밀번호 저장</BoardBoldtext>
                        <Boardtext>다음번에 이 브라우저에서 로그인할 때 비밀번호를 입력하는 대신 프로필 사진을 클릭하여 로그인할 수 있습니다.</Boardtext>
                        <BoardButtonDiv>
                            <BoardYesButton>확인</BoardYesButton>
                            <BoardNoButton>나중에 하기</BoardNoButton>
                        </BoardButtonDiv>
                    </ContentpwdBoard>
                    <ContentBoard>
                        <ContentBoardComentDiv>
                            <ContentBoardComent>안녕님, 무슨생각을 하고있으신가요?</ContentBoardComent>
                        </ContentBoardComentDiv>
                        <ContentBoardLineDiv>
                            <ContentBoardLine></ContentBoardLine>
                        </ContentBoardLineDiv>
                        <ContentBoardButtonDiv>
                            <ContentBoardLiveButton>라이브방송하기</ContentBoardLiveButton>
                            <ContentBoardWriteButton>게시물 작성하기</ContentBoardWriteButton>
                            <ContentBoardFeelButton>기분을 나타내보세요!</ContentBoardFeelButton>
                        </ContentBoardButtonDiv>
                    </ContentBoard>
                    <ContentBoardList>
                    </ContentBoardList>
                    <ContentBoardList>
                    </ContentBoardList>
                    <ContentBoardList>
                    </ContentBoardList>
                    <ContentBoardList>
                    </ContentBoardList>
                </BoardDiv>
                <Rightside>
                    <RightsidefriendBoard>
                        <FriendBoardBoldText>친구신청</FriendBoardBoldText>
                        <FriendBoardText>이은비</FriendBoardText>
                        <FriendBoldTextDiv>
                            <FriendButton>수락</FriendButton>
                            <FriendNoButton>삭제</FriendNoButton>
                        </FriendBoldTextDiv>
                        <RightsideLine></RightsideLine>
                        <NumBoardText>연락처</NumBoardText>
                    </RightsidefriendBoard>
                </Rightside>
            </Contentbar>
        </Body >
    );
}

export default Main;
