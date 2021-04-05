import { useState, useRef } from 'react'

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const countRef = useRef(null)

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

export default useTimer
