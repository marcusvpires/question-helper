import React from "react";
import Question from '../Question'
import * as S from "./styled";

const QuestionSection = ({ questions }) => {
  console.log(questions)
  return (
    <S.QuestionSection id='QuestionSection'>
      {questions.map(question => (<Question question={question} key={question.id}/>))}
    </S.QuestionSection>
  );
};

export default QuestionSection;
