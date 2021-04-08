import React from 'react'
import * as I from '@styled-icons/boxicons-regular/'
import * as S from './styled'

const Timer = ({ timer, isActive, handleStart, handlePause, setTimer }) => (
  <S.TimerWrapper>
    <S.Timer
      required
      type='time'
      min="0:00"
      max="100:59"
      disabled={isActive}
      onChange={(ev) => {
        const format =  ev.target.value.split(':')
        setTimer(Number(format[0] * 60) + Number(format[1]))
      }}
      value={formatTime(timer)}
    />
    { !isActive ? <S.TimerButton onClick={handleStart }><I.Play /></S.TimerButton> : <S.TimerButton onClick={handlePause} ><I.Pause /></S.TimerButton> }
  </S.TimerWrapper>
)

const formatTime = (timer) => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)

  return `${getMinutes}:${getSeconds}`
}

export default Timer