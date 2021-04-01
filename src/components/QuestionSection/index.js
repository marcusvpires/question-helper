import React from "react";
import Question from '../Question'
import * as S from "./styled";

const QuestionSection = () => {
  const question = {id: 1234567890, value: 'C', number: 10, attributes: { type: 'alternative' } }
  return (
    <S.QuestionSection>
      <Question question={question}/>
    </S.QuestionSection>
  );
};

export default QuestionSection;
