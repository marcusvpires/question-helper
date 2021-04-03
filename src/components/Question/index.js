import React, { useState } from "react";
import Number from "./Number";
import Alternative from "./Alternative";
import Text from "./Text";
import Buttons from "./Buttons";
import * as S from "./styled";

const Question = ({ question }) => {
  const [value, setValue] = useState(question.value);
  const [text, setText] = useState({ display: false, color: null, rotate: null });

  const save = (value) => {
    console.log("Save question", question.id);
    question.value = value;
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
    <S.Question id={question.id}>
      <Number question={question} />
      {type === "alternative" && <Alternative question={question} />}
      {type === "text" && <S.Title>{value}</S.Title>}
      <Buttons
        id={question.id}
        displayText={handleText}
        text={text}
        type={type}
      />
      {text.display && <Text value={value} setValue={setValue} save={save} />}
    </S.Question>
  )
};

export default Question;
