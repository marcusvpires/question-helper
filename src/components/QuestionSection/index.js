import React, { forwardRef } from 'react'
import Question from "../Question";
import * as S from "./styled";

const QuestionSection = forwardRef(({ questions, remove, changeMarker, saveQuestion }, ref) => {
  return (
    <S.QuestionSection id="QuestionSection">
      {questions.map((question) => (
        <Question
          question={question}
          key={question.id}
          remove={remove}
          changeMarker={changeMarker}
          marker={question.attributes.marker}
          saveQuestion={saveQuestion}
          id={question.id}
        />
      ))}
      <S.QuestionEnd ref={ref} />
    </S.QuestionSection>
  );
});

export default QuestionSection;
