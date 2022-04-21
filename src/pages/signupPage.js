import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState("")
    const [nickname, setNickName] = useState("")
    const [password, setPassWord] = useState("")
    const [passwordR, setPassWordR] = useState("")



    const SetAccount = (e) => {
        setAccount(e.target.value)
    }
    const SetNickName = (e) => {
        setNickName(e.target.value)
    }

    const SetPassWord = (e) => {
        setPassWord(e.target.value)
    }

    const SetPassWordR= (e) => {
      setPassWordR(e.target.value)
    }
    const SignUpClick = () => {
        if(password !== passwordR){
            alert('비밀번호를 다시 확인 해주세요')
            return;
        }

        fetch('http://localhost:8080/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                account: account,
                nickname: nickname,
                password: password,
            }),
        }).then((res) => {
            if(res.status === 200){
navigate('/')
            }
         })



            .catch((error) => console.log(error, "에러"))
    }

    return (
        <Wrapper>
            <Section01>
                <SignUpBox>
                    <h2>회원 가입</h2>
                    아이디
                    <SignUpBoxInput onChange={SetAccount}></SignUpBoxInput>
                    닉네임
                    <SignUpBoxInput onChange={SetNickName}></SignUpBoxInput>
                    비밀번호
                    <SignUpBoxInput onChange={SetPassWord} type='password'></SignUpBoxInput>
                    비밀번호 확인
                    <SignUpBoxInput onChange={SetPassWordR} type='password'></SignUpBoxInput>
                    <SendBtn onClick={SignUpClick}>가입하기</SendBtn>

                </SignUpBox>
            </Section01>
        </Wrapper>
    )
}


export default SignUpPage;


const Wrapper = styled.div`
  width:100%;
  height:100%;
`

const Section01 = styled.section`
  width:100%;
  height:100%;
  margin-top:100px;
  background:red;
  display:flex;
  justify-content: center;
  align-items:center;
`


const SignUpBox = styled.div`
  width:50%;
  height:400px;
  background:blue;
  display:flex;
  flex-direction:column;
`

const SignUpBoxInput = styled.input`
 width:200px;
`

const SendBtn = styled.button`
  width:100px;
  height:50px;
`