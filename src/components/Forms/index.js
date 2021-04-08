import React from "react";

import * as questionStorage from '../../storage/question'

import Alternative from "./Alternative";
import Text from "./Text";
import Display from "./Display";
import Buttons from "./Buttons";

import * as S from "./styled";

const Forms = ({ form }) => {

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
        number: form.number,
        attributes: { type: type, marker: null, time: formatTime(Timer.timer) },
        repositoryID: repositoryID
      }
      
      if (type === 'text') { form.handleText(''); localStorage.removeItem('text') }
      form.handleNumber(Number(form.number) + 1)
      Timer.handleReset()

      questionStorage.generate(question);

    } catch (err) {
      console.warn('Error on create question -', `value: ${value}, type: ${type}, number: ${form.number}`, err )
      alert('Error on create question')
    }
  }

  return (
    <S.FormsWrapper >
      <S.FormsQuestion>
        Question
        <S.FormsNumber
          title="Question number"
          name="Question number"
          id="number"
          type="number"
          placeholder="0"
          value={form.number}
          onChange={ev => { form.handleNumber(ev.target.value) }}
          min="0"
        />
      </S.FormsQuestion>
      <Alternative createQuestion={createQuestion} />
      <Buttons createQuestion={createQuestion} timer={Timer} />
      <Text text={form.text} handleText={form.handleText} />
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
