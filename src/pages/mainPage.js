import React, { useEffect } from "react";
import styled from "styled-components";
import Talk from "../components/talk";
import io from "socket.io-client"

import { useStore } from "../store/store";

let socket=''
const MainPage = () => {


    useEffect(()=>{
        socket = io.connect('http://localhost:8080')

        socket.on("welcome", (data) => {
            console.log(data,"연결")
        })
    
        socket.on("exit",(data)=>{
        console.log(data,"누가나감")
        })
    
        socket.on("message", (data) => {
          console.log(data,"메세지")
        })
    },[socket])
    return (
        <Wrapper>
            <Section01>
                <ChatWrapper>
                    <MyChat>
                        <ProfileBox>
                            {/* <ProfileImg></ProfileImg>
                            <ProfileStatus></ProfileStatus> */}
                        </ProfileBox>
                        <ChatContentsBox>
                            안녀아세요
                        </ChatContentsBox>

                    </MyChat>
                    <OtherChat>
                        <OtherProfileBox>
                            <OtherProfileImg></OtherProfileImg>
                            <OtherProfileStatus></OtherProfileStatus>
                        </OtherProfileBox>
                        <OtherNameChatBox>
                            <OtherProfileName>김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수</OtherProfileName>
                            <OtherChatContentBox>
                                안녕하십니까
                            </OtherChatContentBox>
                        </OtherNameChatBox>
                    </OtherChat>


                    <OtherChat>
                        <CommonChatContentBox>안녕하냐고</CommonChatContentBox>
                    </OtherChat>

                </ChatWrapper>


                <Talk></Talk>
            </Section01>
        </Wrapper>
    )
}

export default MainPage;


const Wrapper = styled.div`
  width:100%;
  height:100%;
`


const Section01 = styled.div`
width:100%;
height:85vh;
  margin-top:100px; //nav-size;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
`




const ChatWrapper = styled.div`
width:100%;
height:100%;
overflow:scroll;
`


const MyChat = styled.div`
  display:flex;
  margin-bottom:10px;
  justify-content: right;
`

const ChatContentsBox = styled.div`
  display:flex;
  padding-left:20px;
  padding-right:20px;
  margin-right:20px;
  justify-content:center;
  align-items:center;
  background:yellow;
  width:auto;
  height:auto;
  border-radius: .4em;

`

const ProfileBox = styled.div`
  width:auto;
  height:45px;
  margin-left:20px;
  margin-right:10px;
`

const ProfileImg = styled.img`
  width:45px;
  height:45px;
  background:black;
  position:relative;
  border-radius: 50%;
`

const ProfileStatus = styled.div`
  background:red;
  width:12px;
  height:12px;
  border-radius: 50%;
  position:absolute;
  top:135px;
  left:25px;
`



const OtherChat = styled.div`
  display:flex;
  justify-content:left;
  height:auto;
  background:red;
`

const OtherNameChatBox = styled.div`
  position:relative;
`

const OtherChatContentBox = styled.div`
  display:flex;
  min-height:45px;
  margin-left:10px;
  margin-top:18px;

  padding-left:20px;
  padding-right:20px;
  justify-content:center;
  align-items:center;
  background:rgb(128,128,128);
  width:auto;
  height:auto;
	position: relative;
	border-radius: .4em;


&::after{
	content: '';
	position: absolute;
	left: 30px;
	top: 75%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-right-color:rgb(128,128,128);
	border-left: 0;
	border-top: 0;
	margin-top: -22.5px;
    
	margin-left: -45px;
}
`


const OtherProfileBox = styled.div`
  width:auto;
  height:auto;
  margin-left:20px;
  margin-right:10px;
  padding-top:4px;
`
const OtherProfileName = styled.div`
position:absolute;
  width:400px;
  padding-left:10px;
  font-size:14px;
`

const OtherProfileImg = styled.img`
  width:45px;
  height:45px;
  background:black;
  position:relative;
  border-radius: 50%;
`

const OtherProfileStatus = styled.div`
  background:red;
  width:12px;
  height:12px;
  border-radius: 50%;
  position:absolute;
  top:190px;
  right:40px;
`

const CommonChatContentBox = styled.div`
display:flex;
  min-height:45px;
  margin-left:86px;
  margin-top:18px;

  padding-left:20px;
  padding-right:20px;
  justify-content:center;
  align-items:center;
  background:rgb(128,128,128);
  width:auto;
  height:auto;
	position: relative;
	border-radius: .4em;
`