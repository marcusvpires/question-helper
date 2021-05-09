import React from "react";

// import image from "./image.png";
import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from "../../../global/Design";

const Future = () => (
  <S.Wrapper>
    <D.Icon size="15rem" color="var(--blue)"><I.ChevronsRight/></D.Icon>
    <S.TextContainer>
      <S.Title margin="0 0 2rem 0">Planos para o futuro</S.Title>
      <D.p>
        <D.Strong>Banco de dados na nuvem: </D.Strong>
        Você ponderara ter todas as questões conectadas entre os dispositivos
      </D.p>
      <D.p margin="1rem 0 0">
        <D.Strong>Categorias: </D.Strong>
        Desenvolver um sistema de categorias e matérias para os repositórios e os respectivos filtros.
      </D.p>
      <D.p margin="1rem 0 0">
        <D.Strong>Modo correção: </D.Strong>
        Dar uma nota para cada questão, colocar comentários e obter estatísticas dos dados.
      </D.p>
    </S.TextContainer>
  </S.Wrapper>
);

export default Future;
