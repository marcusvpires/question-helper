import React from "react";
import * as storage from '../../assets/storage'

import Alternative from "./Alternative";
import Text from "./Text";
import Display from "./Display";
import Buttons from "./Buttons";
import useTimer from './useTimer'

import * as S from "./styled";

const Forms = ({ form }) => {

  const Timer = useTimer(0)
  
  function createQuestion(value, type) {
    try {
      const number = form.number
      const id = storage.createID()
      const repositoryID = localStorage.getItem('repositoryID')
      const question = {
        id: id,
        value: value,
        number: number,
        attributes: { type: type, marker: null, time: storage.toTime(Timer) },
        repositoryID: repositoryID
      }

      form.set('number', () => Number(number) + 1)
      if (type === 'text') { form.set('text', '') }
      Timer.handleReset()

      storage.question.add(question);

    } catch (err) {
      console.warn('Error on create question -', `value: ${value}, type: ${type}, form: ${form}`, err )
      alert('Error on create question')
    }
  }

  function changeNumber(e) {
    form.set('number', e.target.value)
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
          value={form.number}
          onChange={changeNumber}
          min="0"
        />
      </S.FormsQuestion>
      <Alternative createQuestion={createQuestion} />
      <Buttons createQuestion={createQuestion} timer={Timer} />
      <Text form={form} />
      <Display createQuestion={createQuestion} />
    </S.FormsWrapper>
  );
};

export default Forms;
