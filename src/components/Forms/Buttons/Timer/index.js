import React, { useState, useEffect } from "react";
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Timer = ({ timer }) => {

  
  const [minutes, setMinutes] = useState(() => ( `0${Math.floor(timer.timer / 60)}`.slice(-2)) )
  const [seconds, setSeconds] = useState(() => ( `0${timer.timer - Math.floor(timer.timer/60) * 60}`.slice(-2)))
  
  useEffect(() => {
    const time = Number(seconds) + Number(minutes) * 60
    localStorage.setItem("timer", time);
    timer.setTimer(time)
  
  // The timer's useEffect is performed separately to avoid an infinite loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes, seconds])

  useEffect(() => {
    const minutes = `0${Math.floor(timer.timer / 60)}`.slice(-2)
    const seconds = `0${timer.timer - Math.floor(timer.timer/60) * 60}`.slice(-2)
    const time = Number(seconds) + Number(minutes) * 60
    localStorage.setItem("timer", time);
    setMinutes(minutes)
    setSeconds(seconds)
  }, [timer.timer])

  return (
    <S.TimerWrapper>
      <S.Time>
        <S.Minutes
          type="number"
          value={minutes}
          onChange={ev => {
            const value = `0${ev.target.value}`.slice(-2)
            setMinutes(value)
          }}
        />:
        <S.Seconds
          type="number"
          value={seconds}
          onChange={ev => {
            const value = `0${ev.target.value}`.slice(-2)
            setSeconds(value)
          }}
        />
      </S.Time>
      {!timer.isActive ? (
        <S.TimerButton onClick={timer.handleStart}>
          <S.Label>Iniciar</S.Label>
          <S.Icon>
            <I.Play />
          </S.Icon>
        </S.TimerButton>
      ) : (
        <S.TimerButton onClick={timer.handlePause}>
          <S.Label>Parar</S.Label>
          <S.Icon>
            <I.Pause />
          </S.Icon>
        </S.TimerButton>
      )}
    </S.TimerWrapper>
  );
};

export default Timer;
