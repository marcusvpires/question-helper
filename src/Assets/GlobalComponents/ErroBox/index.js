import React from "react";

import { render } from "react-dom";
import { screen } from "../assets";

import * as S from "./styled";

const displayErroBox = () => {
  screen('erroScreen')
  render (
    <ErroBox />,
    document.getElementById("erroScreen")
  )
}

const ErroBox = () =>  (
  <S.Wrapper>
    <S.Back />
    <S.Container>
      Hello
    </S.Container>
  </S.Wrapper>
)

export default displayErroBox