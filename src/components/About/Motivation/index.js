import React from "react";

// import image from "./image.png";
import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from "../../../global/Design";

const Motivation = () => (
  <S.Wrapper>
    <D.Icon size="12rem" color="var(--blue)"><I.Rocket/></D.Icon>
    <S.TextContainer>
      <S.Title margin="0 0 2rem 0">MOTIVAÇÃO</S.Title>
      <D.p>
        Durante o EAD, a minha escola contratou uma plataforma digital, contudo, as avaliações e atividades apresentavam alguns problemas. O tempo de carregamento era relativamente elevado e as questões não eram salvas automaticamente, prejudicando a realização de atividades e provas. 
      </D.p>
      <D.p margin="1rem 0 0">
        Apesar disso, eu acredito que essa plataforma tem grande potêncial para melhorar e inovar os métodos de ensino. A minha plataforma tenta corrigir alguns desses problemas e possui algumas ferramentas úteis.
      </D.p>
    </S.TextContainer>
  </S.Wrapper>
);

export default Motivation;
