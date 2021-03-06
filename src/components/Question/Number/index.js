import React, { useState } from "react";
import * as S from "./styled";

const Number = ({ question, save }) => {
  const [number, setNumber] = useState(question.number);

  function changeNumber(e) {
    question.number = e.target.value
    setNumber(e.target.value)
  }

  return (
    <S.Number>
      <S.NumberText>Questão</S.NumberText>
      <S.NumberTextShort>Ex.</S.NumberTextShort>
      <S.NumberInput
        title={`Questão ${question.number}`}
        name={`Questão ${question.number}`}
        arial-label={`Questão ${question.number}`}
        arial-required="true"
        id='number'
        type='number'
        placeholder='0'
        value={number}
        onChange={changeNumber}
        onBlur={() => {save(question)}}
        min='0'
      />
    </S.Number>
  );
};

export default Number;
