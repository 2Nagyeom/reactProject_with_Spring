import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from 'react-modal';
import profile from './img/me.png';
import friend from './img/friends.png';
import group from './img/group.png';
import watch from './img/watch.png';
import pasttime from './img/pasttime.png';
import save from './img/save.png';
import event from './img/event.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';



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
    margin-bottom : 50px;
    margin-top : -20px;
    padding-left : 10px;
    display: flex;
`;

// 왼쪽 위 로고텍스트 스타일
const Logotext = styled.p`
    font-size : 35px;
    font-weight : bold;
    color : orange;
`;

// 오른쪽 위 사용자 이름
const UserName = styled.p`
    font-size : 20px;
    font-weight : bold;
    color : black;
    padding-top : 25px; 
    padding-left : 1000px;
    `;

// 오른쪽 위 로그아웃 버튼
const LogoutButton = styled.button`
    width: 100px;
    height: 30px;
    padding-top : ;
    margin-top : 3%;
    margin-left : 75px;
    margin-right : 5px;
    background: #c3bdbb;
    color: black;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #c3bdbb;
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

// 왼쪽 사이드 div에 들어가는 아이콘과 텍스트 같이 둘 디브 스타일
const LeftContentDiv = styled.div`
    display : flex;
    padding-left : 20px;
    weight : 100%;
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
    border-radius : 5%;
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
    background: #f6b7ab;
    color: black;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #f6b7ab;
    `;

// 코멘트에 필요한 버튼(이거 누르면 게시물 작성으로 감)
const ContentBoardWriteButton = styled.button`
    width: 30%;
    height: 30px;
    margin-bottom : 10%;
    margin-left : 10px;
    background: #d9f6ab;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #d9f6ab; 
    `;

// 코멘트에 필요한 버튼(캡쳐한거 따라함)
const ContentBoardFeelButton = styled.button`
    width: 30%;
    height: 30px;
    margin-bottom : 10%;
    margin-left : 10px;
    background: #f6efc5;
    font-weight : bold;
    border-radius : 5px;
    border: 2px solid #f6efc5; 
    `;


// 데이터 가지고올 게시물 list div 스타일
const ContentBoardList = styled.div`
    width: 95%;
    height: 600px;
    background-color : white;
    box-shadow: 1px 2px 6px #a5a7a3;
    border-radius : 2%;
    margin-bottom : 30px;
    `;

// list에 들어갈 이름 및 시간 넣을 디브
const ContentBoardListDiv = styled.div`
    width : 100%;
    height : 70px;
    /* background-color : green; */
    `;

// list에 들어갈 게시물
const ContentBoardListView = styled.div`
    width : 80%;
    height : 400px;
    margin: 0 auto;

    background-color : yellow;
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
    margin-top : -5%;
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
    padding-top : 230px;
    align-items : center;
    margin-top : -10%;
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
    `;

// 게시물 작성 완료 버튼
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

// 게시물 작성 취소 버튼
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


function Main(params) {
    let navigation = useNavigate();

    function back(params) {
        navigation('/')
    }

    function test() {
        axios.get('http://sunsalman.iptime.org:8080/tableWrite', {
            params: {
                write: 'fsfdsd',
                name: 'sass',
                time: '1111',
                picture: 'http://images.khan.co.kr/article/2021/09/19/2021091902000980800207612.jpg',
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => { test(); })


    const [ModalIsOpen, setModalIsOpen] = useState(false);


    return (
        <Body>
            <Headbar>
                <Logotext>ShowBlog</Logotext>
                <UserName>안녕 님</UserName>
                <LogoutButton onClick={back}>로그아웃하기</LogoutButton>
            </Headbar>
            <Contentbar>
                <Leftside>
                    <LeftContentDiv>
                        <img src={profile} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>name</LeftContent>
                    </LeftContentDiv>
                    <LeftContentDiv>
                        <img src={friend} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>친구</LeftContent>
                    </LeftContentDiv>
                    <LeftContentDiv>
                        <img src={group} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>그룹</LeftContent>
                    </LeftContentDiv>
                    <LeftContentDiv>
                        <img src={watch} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>watch</LeftContent>
                    </LeftContentDiv>
                    <LeftContentDiv>
                        <img src={pasttime} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>과거의 오늘</LeftContent>
                    </LeftContentDiv>
                    <LeftContentDiv>
                        <img src={event} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>이벤트</LeftContent>
                    </LeftContentDiv>
                    <LeftContentDiv>
                        <img src={save} style={{ width: 30, height: 30, paddingTop: 25, }} />
                        <LeftContent>저장됌</LeftContent>
                    </LeftContentDiv>

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
                            <ContentBoardWriteButton onClick={() => setModalIsOpen(true)}> 게시물 작성하기</ContentBoardWriteButton>
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
                                    <BoardMakeYesButton onClick={() => setModalIsOpen(false)}>게시하기</BoardMakeYesButton>
                                    <BoardMakeNoButton onClick={() => setModalIsOpen(false)}>뒤로가기</BoardMakeNoButton>
                                </BoardMakeButtonDiv>
                            </Modal>
                            <ContentBoardFeelButton>기분을 나타내보세요!</ContentBoardFeelButton>
                        </ContentBoardButtonDiv>
                    </ContentBoard>
                    <ContentBoardList>
                        <ContentBoardListDiv>
                            <p style={{ fontSize: 25, paddingLeft: 20, paddingTop: 5, fontWeight: 'bold' }}>안녕 </p>
                            <p style={{ paddingLeft: 20, color: 'gray', marginTop: -20 }}>시간</p>
                        </ContentBoardListDiv>
                        <ContentBoardLine></ContentBoardLine>
                        <ContentBoardListDiv>
                            <p style={{ paddingLeft: 20, }}>adadad</p>
                        </ContentBoardListDiv>
                        <ContentBoardListView></ContentBoardListView>
                    </ContentBoardList>
                    <ContentBoardList>
                        <ContentBoardListDiv>
                            <p style={{ fontSize: 25, paddingLeft: 20, paddingTop: 5, fontWeight: 'bold' }}>안녕 </p>
                            <p style={{ paddingLeft: 20, color: 'gray', marginTop: -20 }}>시간</p>
                        </ContentBoardListDiv>
                        <ContentBoardLine></ContentBoardLine>
                        <ContentBoardListView></ContentBoardListView>
                    </ContentBoardList>
                    <ContentBoardList>
                        <ContentBoardListDiv>
                            <p style={{ fontSize: 25, paddingLeft: 20, paddingTop: 5, fontWeight: 'bold' }}>안녕 </p>
                            <p style={{ paddingLeft: 20, color: 'gray', marginTop: -20 }}>시간</p>
                        </ContentBoardListDiv>
                        <ContentBoardLine></ContentBoardLine>
                        <ContentBoardListView></ContentBoardListView>
                    </ContentBoardList>
                    <ContentBoardList>
                        <ContentBoardListDiv>
                            <p style={{ fontSize: 25, paddingLeft: 20, paddingTop: 5, fontWeight: 'bold' }}>안녕 </p>
                            <p style={{ paddingLeft: 20, color: 'gray', marginTop: -20 }}>시간</p>
                        </ContentBoardListDiv>
                        <ContentBoardLine></ContentBoardLine>
                        <ContentBoardListView>
                        </ContentBoardListView>
                    </ContentBoardList>
                </BoardDiv>
                <Rightside>
                    <RightsidefriendBoard>
                        <FriendBoardBoldText>소꿉친구신청</FriendBoardBoldText>
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
