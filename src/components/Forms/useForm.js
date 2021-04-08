import { useState } from 'react'

const useForm = () => {

  const [text, setText] = useState(() => {
    return localStorage.getItem('text')
  })

  const [number, setNumber] = useState(() => {
    let number = localStorage.getItem('number')
    if (!number) { number = 1 }
  })

  // const [timer, setTimer] = useState('00:00')

  const handleText = (value) => {
    setText(value)
    localStorage.setItem('text', value)
  }

  const handleNumber = (value = 1) => {
    setNumber(value)
    localStorage.setItem('number', value)
  }

  return { text, handleText, number, handleNumber }
}

export default useForm