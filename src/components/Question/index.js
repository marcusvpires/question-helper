import React from "react";
import Number from './Number'
import Alternative from './Alternative'
// import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";

const Question = () => {
  return (
    <S.QuestionWrapper>
      <S.QuestionContainer>
        <S.Question>
          <Number />
          <Alternative/>
        </S.Question>
      </S.QuestionContainer>
    </S.QuestionWrapper>
  );
};

export default Question;
