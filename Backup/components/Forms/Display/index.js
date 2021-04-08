import React from "react";
import * as S from "./styled";

const FormDisplay = ({createQuestion}) => {

  return (
    <S.DisplayWrapper>

      <S.Display onClick={() => { 
        const text = localStorage.getItem('text')
        createQuestion(text, 'text')
      }} >Create</S.Display>
    </S.DisplayWrapper>
  );
};

export default FormDisplay;
