import React from "react";
// import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";

const Question = () => {
  return (
    <S.QuestionWrapper>
      <S.QuestionContainer>
        <S.Question>
          <S.QuestionNumber></S.QuestionNumber>
        </S.Question>
      </S.QuestionContainer>
    </S.QuestionWrapper>
  );
};

export default Question;
