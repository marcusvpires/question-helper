import React from "react";

import * as questionStorage from '../../storage/question'

import Alternative from "./Alternative";
import Number from "./Number";
import Text from "./Text";
import Display from "./Display";
import Buttons from "./Buttons";

import * as S from "./styled";

const Forms = () => {

  const Timer = useTimer(0)
  
  function createQuestion(value, type) {
    try {
      const id = Date.now() + '-' + Math.random().toString(36).slice(-10);
      const repositoryID = localStorage.getItem('repositoryID')

      const formatTime = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
      
        return `${getMinutes}:${getSeconds}`
      }

      const question = {
        id: id,
        value: value,
        number: 1,
        attributes: { type: type, marker: null, time: formatTime(Timer.timer) },
        repositoryID: repositoryID
      }
      
      Timer.handleReset()

      questionStorage.generate(question);

    } catch (err) {
      console.warn('Error on create question -', `value: ${value}, type: ${type}`, err )
      alert('Error on create question')
    }
  }

  return (
    <S.FormsWrapper >
      <S.FormsQuestion>
        Question
        <Number />
      </S.FormsQuestion>
      <Alternative createQuestion={createQuestion} />
      <Buttons createQuestion={createQuestion} timer={Timer} />
      <Text />
      <Display createQuestion={createQuestion} />
    </S.FormsWrapper>
  );
};

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = React.useState(initialState)
  const [isActive, setIsActive] = React.useState(false)
  const countRef = React.useRef(null)

  const handleStart = () => {
    setIsActive(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsActive(false)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setTimer(0)
    setIsActive(false)
  }

  return { timer, isActive, handleStart, handlePause, handleReset, setTimer }
}

export default Forms;
