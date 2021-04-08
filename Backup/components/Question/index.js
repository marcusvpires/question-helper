import React, { useState } from "react";

import * as storage from '../../assets/storage'

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
      setText({ display: true, color: 'blue', rotate: '180deg' });
    }
  };

  return (
    <S.Question id={question.id}>
      <Number question={question} save={storage.question.save} />
      <S.Time>{question.attributes.time}</S.Time>
      {type === "alternative" && <Alternative question={question} save={storage.question.save}/>}
      {type === "text" && <S.Title>{value}</S.Title>}
      <Buttons
        question={question}
        displayText={handleText}
        text={text}
        type={type}
        save={storage.question.save}
        remove={storage.question.remove}
      />
      {text.display && <Text value={value} setValue={setValue} save={storage.question.save} question={question} />}
    </S.Question>
  )
};

export default Question;
