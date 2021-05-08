import React from "react";

import image from "./image.png";
import * as S from "./styled";
import * as D from "../../../global/Design";

const First = () => (
  <S.Wrapper>
    <S.TextContainer>
      <S.Title margin="0 0 2rem 0">O FUTURO DA EDUCAÇÃO JÁ COMEÇOU!</S.Title>
      <D.p>
        As pessoas não são mais as mesmas, o mundo está mudando. Existem
        alternativas melhores do que as escolas tradicionais. Dessa forma, esse
        projeto é o meu pequeno apoio para a evolução do sistema educacional,
        com mais tecnologia, acessibilidade e liberdade.
      </D.p>
      <D.Flex>
        <D.Button margin="1rem 1rem 0 0">Plataforma</D.Button>
        <D.Link
          margin="1rem 0 0"
          href="https://github.com/M4rcusVinicius/question-helper"
          target="_blank"
        >
          Github
        </D.Link>
      </D.Flex>
    </S.TextContainer>
    <S.Image src={image} />
  </S.Wrapper>
);

export default First;
