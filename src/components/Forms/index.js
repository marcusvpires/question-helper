import React from "react";
import * as storage from '../../assets/storage'

import Alternative from "./Alternative";
import Text from "./Text";
import Display from "./Display";
import Buttons from "./Buttons";
import useTimer from './useTimer'

import * as S from "./styled";

const Forms = ({ number, setNumber, text, setText }) => {

  const Timer = useTimer(0)
  
  function createQuestion(value, type) {
    try {
      const id = storage.createID()
      const repositoryID = localStorage.getItem('repositoryID')
      const question = {
        id: id,
        value: value,
        number: number,
        attributes: { type: type, marker: null, time: storage.toTime(Timer) },
        repositoryID: repositoryID
      }

      console.log(question)
      
      if (type === 'text') { setText(''); localStorage.removeItem('text') }
      localStorage.setItem("number", Number(number) + 1);
      setNumber(Number(number) + 1)
      Timer.handleReset()

      storage.question.add(question);

    } catch (err) {
      console.warn('Error on create question -', `value: ${value}, type: ${type}, number: ${number}`, err )
      alert('Error on create question')
    }
  }

  function changeNumber(e) {
    setNumber(e.target.value);
    localStorage.setItem("number", e.target.value);
  }

  return (
    <S.FormsWrapper>
      <S.FormsQuestion>
        Question
        <S.FormsNumber
          title="Question number"
          name="Question number"
          id="number"
          type="number"
          placeholder="0"
          value={number}
          onChange={changeNumber}
          min="0"
        />
      </S.FormsQuestion>
      <Alternative createQuestion={createQuestion} />
      <Buttons createQuestion={createQuestion} timer={Timer} />
      <Text text={text} setText={setText} />
      <Display createQuestion={createQuestion} />
    </S.FormsWrapper>
  );
};

export default Forms;
