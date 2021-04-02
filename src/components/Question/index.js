import React from "react";
import Number from './Number'
import Alternative from './Alternative'
import Buttons from './Buttons'
import * as S from "./styled";

const Question = ({ question, storage }) => {

  return (
    <S.QuestionWrapper>
      <S.Question>
        <Number question={question}/>
        {question.attributes.type === 'alternative' && <Alternative question={question} />}
        <Buttons question={question} storage={storage} />
      </S.Question>
    </S.QuestionWrapper>
  );
};

export default Question;
