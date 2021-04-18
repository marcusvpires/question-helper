import React from "react";
import * as S from "./styled";

const AboutCopy = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Crie seu template para copiar as questões</S.Title>
        <S.Text>Coloque um template que servirá como um molde no input para servir de template para o conversão de todas as questões.</S.Text>
        <S.Text>O texto será repetido para cada questão do repositório, as chaves devem ser colocadas entre colchetes [chave] e serão substituídas pelos dados de cada questão.</S.Text>
        <S.Subtitle>Chaves válidas:</S.Subtitle>
        <S.Text><S.Strong>[number]</S.Strong> - substituído pelo número de cada questão.</S.Text>
        <S.Text><S.Strong>[valor]</S.Strong> - substituído pelo valor de cada questão, sendo "A", "B", "C"... para múltipla escolha e o próprio texto em questões dissertativas</S.Text>
      </S.Container>
    </S.Wrapper>
  )
}

export default AboutCopy;
