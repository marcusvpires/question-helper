import React, { useState } from "react";
import Alternative from "./Alternative";
import * as S from "./styled";

const Forms = ({ addQuestions }) => {
  const [number, setNumber] = useState(() => {
    const number = localStorage.getItem("number");
    if (number) { return number; }
    return "0";
  });

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
        attributes: { type: type },
        repositoryID: repositoryID
      }
      addQuestions(question);
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
    </S.FormsWrapper>
  );
};

export default Forms;
