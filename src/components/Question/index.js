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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Number question={question} save={storage.question.save} />
      <S.Time>{question.attributes.time}</S.Time>
      {type === "alternative" && <Alternative question={question} save={storage.question.save}/>}
=======
      <Number question={question} />
      <S.Time>{question.attributes.time}</S.Time>
      {type === "alternative" && <Alternative question={question} />}
>>>>>>> parent of 88a7013 (Auto update questions)
=======
      <Number question={question} />
      <S.Time>{question.attributes.time}</S.Time>
      {type === "alternative" && <Alternative question={question} />}
>>>>>>> parent of 88a7013 (Auto update questions)
=======
      <Number question={question} />
      <S.Time>{question.attributes.time}</S.Time>
      {type === "alternative" && <Alternative question={question} />}
>>>>>>> parent of 88a7013 (Auto update questions)
      {type === "text" && <S.Title>{value}</S.Title>}
      <Buttons
        question={question}
        displayText={handleText}
        text={text}
        type={type}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        save={storage.question.save}
        remove={storage.question.remove}
      />
      {text.display && <Text value={value} setValue={setValue} save={storage.question.save} question={question} />}
=======
      />
      {text.display && <Text value={value} setValue={setValue} save={save} />}
>>>>>>> parent of 88a7013 (Auto update questions)
=======
      />
      {text.display && <Text value={value} setValue={setValue} save={save} />}
>>>>>>> parent of 88a7013 (Auto update questions)
=======
      />
      {text.display && <Text value={value} setValue={setValue} save={save} />}
>>>>>>> parent of 88a7013 (Auto update questions)
    </S.Question>
  )
};

export default Question;
