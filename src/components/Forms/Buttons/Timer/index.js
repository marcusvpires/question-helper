import React from 'react'
import * as I from '@styled-icons/boxicons-regular/'
import * as S from './styled'

const Timer = ({ timer }) => {
  
  const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    return `${getMinutes}:${getSeconds}`
  }

  return (
  <S.TimerWrapper>
    <S.Timer
      id='timer'
      required
      type='time'
      min="0:00"
      max="59:59"
      disabled={timer.isActive}
      onChange={(ev) => {
        const value =  ev.target.value.split(':')
        const seconds = Number(value[0] * 60) + Number(value[1])
        localStorage.setItem('timer', seconds)
        timer.setTimer(seconds)
      }}
      value={formatTime(timer.timer)}
    />
    { !timer.isActive ? <S.TimerButton onClick={ timer.handleStart }><I.Play /></S.TimerButton> : <S.TimerButton onClick={ timer.handlePause} ><I.Pause /></S.TimerButton> }
  </S.TimerWrapper>
)}

export default Timer