import React from "react";
import * as S from "./styled";

const FormButtons = ({createQuestion}) => {

  return (
    <S.BtnWrapper>

      <S.Button onClick={() => { 
        const text = localStorage.getItem('text')
        createQuestion(text, 'text')
      }} >Create</S.Button>
    </S.BtnWrapper>
  );
};

export default FormButtons;
