import React from "react";
import Number from './Number'
import Alternative from './Alternative'
import Buttons from './Buttons'
import * as S from "./styled";

const Question = ({ question }) => {
  return (
    <S.QuestionWrapper>
      <S.Question>
        <Number question={question}/>
        {question.attributes.type === 'alternative' && <Alternative question={question} />}
        <Buttons question={question} />
      </S.Question>
    </S.QuestionWrapper>
  );
};

export default Question;
