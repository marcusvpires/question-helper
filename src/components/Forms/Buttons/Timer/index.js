import React from 'react'
import * as I from '@styled-icons/boxicons-regular/'
import * as S from './styled'

const Timer = () => {
  const { timer, isActive, handleStart, handlePause, setTimer } = useTimer(0)

  return (
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
  );
}

const formatTime = (timer) => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)

  return `${getMinutes}:${getSeconds}`
}

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = React.useState(initialState)
  const [isActive, setIsActive] = React.useState(false)
  const countRef = React.useRef(null)

  React.useEffect(() => {
    localStorage.setItem('timer', formatTime(timer))
  }, [timer])

  const handleStart = () => {
    setIsActive(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    console.log('Timer', timer)
    setIsActive(false)
  }

  return { timer, isActive, handleStart, handlePause, setTimer }
}

export default Timer