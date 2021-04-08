import { useState } from 'react'

const useForm = () => {

  const [text, setText] = useState(() => {
    let text = localStorage.getItem('text')
    if (!text) { text = '' }
    return text
  })

  const [number, setNumber] = useState(() => {
    let number = localStorage.getItem('number')
    if (!number) { number = 1 }
    return number
  })

  // const [timer, setTimer] = useState('00:00')

  const handleText = (value) => {
    setText(value)
    localStorage.setItem('text', value)
  }

  const handleNumber = (value = 1) => {
    console.log('Value:', value)
    setNumber(value)
    localStorage.setItem('number', value)
  }

  return { text, handleText, number, handleNumber }
}

export default useForm