import React from "react";

import image from "./image.png"
import * as S from "./styled";
import * as D from "../../../global/Design"

const First = () =>  (
  <S.Wrapper>
    <S.TextContainer>
      <S.Title margin="0 0 2rem 0" >Anote as respostas de forma rápida, prática e segura.</S.Title>
      <D.p>Utilize todas as ferramentas e inputs para salvar de forma confiável as respostas da prova. Cada letra do texto é salva astomaticamente e disponível a qualquer momento, mesmo sem internet. Organize as suas atividades e provas em repositórios para ter acesso posteriormente.</D.p>
    </S.TextContainer>
    <S.Image src={image} />
  </S.Wrapper>
);

export default First;