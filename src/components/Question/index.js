import React from "react";
import Number from './Number'
import Alternative from './Alternative'
import Buttons from './Buttons'
import * as S from "./styled";

const Question = ({ question, remove, changeMarker, marker }) => {
  return (
    <S.QuestionWrapper marker={marker}>
      <S.Question>
        <Number question={question}/>
        {question.attributes.type === 'alternative' && <Alternative question={question} />}
        <Buttons id={question.id} remove={remove} changeMarker={changeMarker} marker={marker} />
      </S.Question>
    </S.QuestionWrapper>
  );
};

export default Question;
