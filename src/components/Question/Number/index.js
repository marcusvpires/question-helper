import React, { useState } from "react";
import * as S from "./styled";

const Number = () => {
  const [number, setNumber] = useState(0);

  function changeNumber(e) {
    setNumber(e.target.value)
  }

  return (
    <S.Number>
      <S.NumberText>Question</S.NumberText>
      <S.NumberInput
        title='Question number'
        name='Question number'
        id='number'
        type='number'
        placeholder='0'
        value={number}
        onChange={changeNumber}
        min='0'
      />
    </S.Number>
  );
};

export default Number;
