import React from "react";
import { render } from "react-dom";
import { PopUp, screen } from "../assets";

import * as S from "./styled";

const displayErroBox = () => {
  const root = screen('erroScreen')
  render(
    <ErroBox />,
    root
  )
}

const ErroBox = () => {
  return (
    <PopUp>
      <S.Wrapper>
      </S.Wrapper>
    </PopUp>
  )
}

export default displayErroBox