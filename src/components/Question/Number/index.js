import React, { useState } from "react";
import * as S from "./styled";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Number = ({ question, save }) => {
  const [questionNumber, setQuestionNumber] = useState(question.number);

  function changeNumber(e) {
    question.number = e.target.value
    setQuestionNumber(e.target.value)
=======
const Number = ({ question }) => {
  const [number, setNumber] = useState(question.number);

  function changeNumber(e) {
=======
const Number = ({ question }) => {
  const [number, setNumber] = useState(question.number);

  function changeNumber(e) {
>>>>>>> parent of 88a7013 (Auto update questions)
=======
const Number = ({ question }) => {
  const [number, setNumber] = useState(question.number);

  function changeNumber(e) {
>>>>>>> parent of 88a7013 (Auto update questions)
    setNumber(e.target.value)
>>>>>>> parent of 88a7013 (Auto update questions)
  }

  return (
    <S.Number>
      <S.NumberText>Question</S.NumberText>
      <S.NumberInput
        title='Question number'
        name='Question number'
        id='number'
        type='number'
        placeholder='0'
        value={questionNumber}
        onChange={changeNumber}
        min='0'
      />
    </S.Number>
  );
};

export default Number;
