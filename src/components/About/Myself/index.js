import React from "react";

import image from "./profile.png";
import * as I from "@styled-icons/boxicons-logos"
import * as S from "./styled";
import * as D from "../../../global/Design";

const Myself = () => (
  <S.Wrapper>
    <S.TextContainer>
      <S.Title margin="0 0 2rem 0">Quem sou eu</S.Title>
      <D.p>
        Meu nome é Marcus Vinícius, tenho 17 anos e estou no 3° ensino médio.
        Gosto de programar e fazer alguns projetos de robótica desde criança.
      </D.p>
      <D.p margin="1rem 0 2rem">
        Estou estudando para passar em uma boa faculdade em 2021, gosto de tocar
        violão e estou esperando uma vacina para voltar a aula presencial.
      </D.p>
      <D.Flex>
        <S.Link><I.Twitter /></S.Link>
        <S.Link><I.Linkedin /></S.Link>
        <S.Link><I.Instagram /></S.Link>
        <S.Link><I.Discord /></S.Link>
        <D.Link
          href="https://github.com/M4rcusVinicius/question-helper"
          target="_blank"
        >
          <D.Flex>
            <D.Icon><I.Github /></D.Icon>
            Github
          </D.Flex>
        </D.Link>
      </D.Flex>
    </S.TextContainer>
    <S.Image src={image} />
  </S.Wrapper>
);

export default Myself;
