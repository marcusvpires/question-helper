import React from "react";
import GlobalStyles from "../global/GlobalStyles";

import Header from "../components/About/Header"
import First from "../components/About/First"
import Motivation from "../components/About/Motivation"
import Features from "../components/About/Features"
import Myself from "../components/About/Myself"
import Future from "../components/About/Future"

import * as S from '../components/About'
import * as D from "../global/Design"

const AboutPage = () => {

  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <First />
        <Motivation />
        <Myself />
        <Features />
        <Future />
      </S.Wrapper>
    </>
  );
};

export default AboutPage;
