import React from "react";
import Number from './Number'
import Alternative from './Alternative'
// import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";

const Question = ({ question }) => {
  return (
    <S.QuestionWrapper>
      <S.Question>
        <Number question={question}/>
        {question.attributes.type === 'alternative' && <Alternative question={question} />}
      </S.Question>
    </S.QuestionWrapper>
  );
};

export default Question;
