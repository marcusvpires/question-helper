import React from "react";
import Question from "../Question";
import * as S from "./styled";

const QuestionSection = ({ questions, remove, changeMarker, saveQuestion }) => {
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
    </S.QuestionSection>
  );
};

export default QuestionSection;
