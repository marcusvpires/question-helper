import { useState } from 'react'

const useForm = () => {
  const [text, setText] = useState(() => {
    return localStorage.getItem('text')
  })

  // const [number, setNumber] = useState(() => {
  //   let number = localStorage.getItem('number')
  //   if (!number) { number = 1 }
  // })
  // const [timer, setTimer] = useState('00:00')

  const handleText = (value) => {
    setText(value)
    localStorage.setItem('text', value)
  }

  return { text, handleText }
}

export default useForm