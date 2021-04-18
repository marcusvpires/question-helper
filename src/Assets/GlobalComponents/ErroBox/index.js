import React, { Fragment } from "react";

import { render } from "react-dom";
import { screen } from "../assets";

import * as S from "./styled";
import * as D from '../../Design'

const displayErroBox = () => {
  screen('erroScreen')
  render (
    <ErroBox />,
    document.getElementById("erroScreen")
  )
}

const ErroBox = () =>  (
  <Fragment>
    <D.PopBack />
    <D.Popup>
      <S.Wrapper>

        Hello
      </S.Wrapper>
    </D.Popup>
  </Fragment>
)

export default displayErroBox