import React from "react";

import Alternative from "./Alternative";
import Number from "./Number";
import Text from "./Text";
import Buttons from "./Buttons";

import * as S from "./styled";

const Forms = () => {

  const Timer = useTimer(0)

  return (
    <S.FormsWrapper >
      <S.FormsQuestion>
        Question
        <Number />
      </S.FormsQuestion>
      <Alternative resetTimer={Timer.handleReset} />
      <Buttons timer={Timer} />
      <Text />
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
      setTimer((timer) => {
      const newTimer = timer + 1
      localStorage.setItem('timer', newTimer)
      return newTimer
    })}, 1000)
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
