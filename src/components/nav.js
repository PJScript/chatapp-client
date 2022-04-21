import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    const LogOut = () => {
        let confirmFlag = window.confirm("정말 로그아웃 하시겠습니까?")
        if(confirmFlag){
            navigate('/')
        }else{
            return;
        }
    }
    return (
        <Wrapper>
            <div onClick={LogOut}>로그아웃</div>
        </Wrapper>
    )
}



export default Nav;

const Wrapper =styled.nav`
  width:100%;
  height:100%;
  max-height:70px;
  position:fixed;
  top:0;
  left:0;
  background:red;
`

