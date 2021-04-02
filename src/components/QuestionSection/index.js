import React from "react";
import Question from '../Question'
import * as S from "./styled";

const QuestionSection = ({ storage }) => {
  return (
    <S.QuestionSection id='QuestionSection'>
      {storage.questions.map(question => (<Question question={question} key={question.id} storage={storage} />))}
    </S.QuestionSection>
  );
};

export default QuestionSection;
