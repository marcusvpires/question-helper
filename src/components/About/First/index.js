import React from "react";

import { Github } from '@styled-icons/boxicons-logos/Github'
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock'
import { LinkedinBox } from '@styled-icons/remix-fill/LinkedinBox'
import logo from "./logo.png"

import * as S from "./styled";
import * as D from "../../../global/Design"

console.log(logo)

const First = () =>  (
  <S.Wrapper>
    <S.Logo>
      <S.LogoImage src={logo} />
      <S.LogoText>
        Gabarito Virtual
      </S.LogoText>
    </S.Logo>

    <S.HeaderLinks>
      <S.HeaderLink href='https://www.linkedin.com/in/marcus-vinicius-almeida-pires-b194691b6/' >
        <D.Icon><LinkedinBox /></D.Icon>
        <S.HeaderLabel>Linkedin</S.HeaderLabel>
      </S.HeaderLink>

      <S.HeaderRedirect to='/about' >
        <D.Icon><CodeBlock /></D.Icon>
        <S.HeaderLabel>About</S.HeaderLabel>
      </S.HeaderRedirect>

      <S.HeaderLink href='https://github.com/M4rcusVinicius/question-helper' >
        <D.Icon><Github /></D.Icon>
        <S.HeaderLabel>Github</S.HeaderLabel>
      </S.HeaderLink>
    </S.HeaderLinks>
  </S.Wrapper>
);

export default First;