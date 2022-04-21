import React, { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/store"

const LoginPage = () => {
    const navigate = useNavigate();
    const [account,setAccount] = useState("");
    const [password,setPassword] = useState("");


    const SetAccount = (e) => {
setAccount(e.target.value)
    }

    const SetPassWord = (e) => {
setPassword(e.target.value)
    }

    const Submit = () => {
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                account: account,
                password: password,
            }),
        }).then((res) => {
          if(res.status === 200){

            navigate("/main")
          }else{
              alert('아이디 및 비밀번호를 확인 해주세요')
          }
        })
    }
    return (
        <Wrapper>
            <Section01>
                <Section01LoginBox>
                    <LoginBoxTitle>
                        로그인
                    </LoginBoxTitle>
                    <LoginBoxSubTitle>
                        <p>아이디</p>
                        <LoginBoxInput onChange={SetAccount}></LoginBoxInput>
                        <p>비밀번호</p>
                        <LoginBoxInput onChange={SetPassWord} type="password"></LoginBoxInput>
                        <p onClick={Submit}>로그인</p>
<p onClick={() => navigate('/signup')}>회원 가입</p>

                    </LoginBoxSubTitle>

                </Section01LoginBox>
            </Section01>
        </Wrapper>
    )
}

export default LoginPage



const Wrapper = styled.div`
  width:100vw;
  height:100vh;
`


const Section01 = styled.section`
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items:center;
`


const Section01LoginBox = styled.div`
  width:400px;
  height:500px;

`

const LoginBoxTitle = styled.div`
  width:100%;
  height:auto;
  font-size:25px;
  font-weight:bold;
  text-align: center;
  line-height: 60px;
`

const LoginBoxSubTitle = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const LoginBoxInput = styled.input`
    width:60%;
    height:30px;
    margin-bottom:10px;

`