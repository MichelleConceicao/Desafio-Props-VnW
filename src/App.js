import React, { Component } from "react";
import About from "./Components/About.js";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import img from "./IMG/background.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const TitleOne = styled.h1`
  height: 15vh;
  font-size: 40px;
  text-shadow: 2px 1px #f7f6a5;
  color: #fff;
  text-align: center;
  -webkit-animation: TitleOne 1s ease-in-out infinite alternate;
  -moz-animation: TitleOne 1s ease-in-out infinite alternate;
  animation: TitleOne 1s ease-in-out infinite alternate;
  @keyframes TitleOne {
    from {
      text-shadow: 0 0 10px #a569bd, 0 0 20px #a569bd, 0 0 30px #a569bd,
        0 0 40px #a569bd, 0 0 50px #a569bd, 0 0 60px #a569bd, 0 0 70px#A569BD;
    }
    to {
      text-shadow: 0 0 20px #a569bd, 0 0 30px #a569bd, 0 0 40px #a569bd,
        0 0 50px #a569bd, 0 0 60px#A569BD, 0 0 70px#A569BD, 0 0 80px #a569bd;
    }
  }
`;

const Container = styled.div`
  background-color: #f4ecf7;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <TitleOne>Hey there</TitleOne>
        <About name="Michelle Pereira" age="32" studying="javscript"></About>
      </Container>
    );
  }
}
