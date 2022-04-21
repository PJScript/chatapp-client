import React, { useRef, useState } from 'react'
import styled from "styled-components"

const Talk = () => {
    const [resizeHeight, setResizeHeight] = useState('auto')
    const textAreaRef = useRef()
    const TextBoxResize = () => {
      if(textAreaRef === null || textAreaRef.current === null){
          return;
      }
      let height = textAreaRef.current.style.height;
      height = height.slice(0, height.length-2);
      height = Number(height);

      let scrollHeight = textAreaRef.current.scrollHeight
      console.log(scrollHeight,"스크롤")
      


      if(height <= 124){
          console.log("단순 높이",height)
        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
      }else if(scrollHeight < 145){
          console.log("스크롤 높이",scrollHeight)
        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';

      }
    }
    return (
        <Wrapper>
            <Section01>
                <ToolBox>
더보기
                </ToolBox>
                <TextInputWrapper>
                    <TextArea>
                    <TextInput height={resizeHeight} ref={textAreaRef} onChange={TextBoxResize}></TextInput>

                    </TextArea>
                    <SendBtn>보내기</SendBtn>
                </TextInputWrapper>
            </Section01>
        </Wrapper>
    )
}

export default Talk;

const Wrapper = styled.div`
  width:100%;
  height:auto;
  /* position:fixed; */
  /* bottom:6px; */
  /* left:0; */
  background:red;
`

const Section01 = styled.section`
`

const TextInputWrapper = styled.div`
width:100%;
height:auto;
display:flex;
`
const TextArea = styled.div`
  width:100%;
  height:auto;
  border:1px solid red;
`
const TextInput = styled.textarea.attrs((props)=>{})`
width:100%;
height:auto;
outline:none;
padding-left:50px;

/* overflow:hidden; */
`

const SendBtn = styled.button`
  width:200px;
  height:inherit;
`

const ClearBtn = styled.button`
  width:80px;
  height:30px;
`


const ToolBox = styled.div`
  display:flex;
`
