import React, { useState } from "react";
import Number from "./Number";
import Alternative from "./Alternative";
import Text from "./Text";
import Buttons from "./Buttons";
import * as S from "./styled";

const Question = ({ question, remove, changeMarker, marker, saveQuestion }) => {
  const [value, setValue] = useState(question.value);
  const [text, setText] = useState({ display: false, color: null, rotate: null });

  const save = (value) => {
    console.log("Save question", question.id);
    question.value = value;
    saveQuestion(question);
  };

  const type = question.attributes.type;
  const handleText = () => {
    if (text.display) {
      setText({ display: false, color: null, rotate: null });
    } else {
      setText({ display: true, color: 'blue', rotate: '180deg' });
    }
  };

  return (
    <S.QuestionWrapper marker={marker}>
      <S.Question>
        <Number question={question} />
        {type === "alternative" && <Alternative question={question} />}
        {type === "text" && <S.Title>{value}</S.Title>}
        <Buttons
          id={question.id}
          remove={remove}
          changeMarker={changeMarker}
          marker={marker}
          displayText={handleText}
          text={text}
          type={type}
        />
        {text.display && <Text value={value} setValue={setValue} save={save} />}
      </S.Question>
    </S.QuestionWrapper>
  );
};

export default Question;
