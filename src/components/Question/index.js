import React, { useState } from "react";

import * as questionStorage from '../../storage/question'

import Number from "./Number";
import Alternative from "./Alternative";
import Text from "./Text";
import Buttons from "./Buttons";

import * as S from "./styled";

const Question = ({ question }) => {
  const [value, setValue] = useState(question.value);
  const [text, setText] = useState({ display: false, color: null, rotate: null });

  const type = question.attributes.type;
  const handleText = () => {
    if (text.display) {
      setText({ display: false, color: null, rotate: null });
    } else {
      setText({ display: true, color: '#2a69ff', rotate: '180deg' });
    }
  };

  return (
    <S.Question id={question.id}>
      <Number question={question} save={questionStorage.update} />
      <S.Time>{question.attributes.time}</S.Time>
      {type === "alternative" && <Alternative question={question} save={questionStorage.update}/>}
      {type === "text" && <S.Title>{value}</S.Title>}
      <Buttons
        question={question}
        displayText={handleText}
        text={text}
        type={type}
        save={questionStorage.update}
        remove={questionStorage.remove}
      />
      {text.display && <Text value={value} setValue={setValue} save={questionStorage.update} question={question} />}
    </S.Question>
  )
};

export default Question;
