import React from "react";

import * as storage from '../../assets/storage'

import Alternative from "./Alternative";
import Text from "./Text";
import Buttons from "./Buttons";

import * as S from "./styled";

const Forms = ({ number, setNumber, text, setText }) => {

  function changeNumber(e) {
    setNumber(e.target.value);
    localStorage.setItem("number", e.target.value);
  }

  function createQuestion(value, type) {
    try {
      const id = Date.now() + '-' + Math.random().toString(36).slice(-10);
      const repositoryID = localStorage.getItem('repositoryID')
      
      const question = {
        id: id,
        value: value,
        number: number,
        attributes: { type: type, marker: null },
        repositoryID: repositoryID
      }
      
      if (type === 'text') { setText(''); localStorage.removeItem('text') }
      localStorage.setItem("number", Number(number) + 1);
      setNumber(Number(number) + 1)

      storage.save(question);

    } catch (err) {
      console.warn('Error on create question -', `value: ${value}, type: ${type}, number: ${number}`, err )
      alert('Error on create question')
    }
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
      <Text text={text} setText={setText} />
      <Buttons createQuestion={createQuestion} />
    </S.FormsWrapper>
  );
};

export default Forms;
