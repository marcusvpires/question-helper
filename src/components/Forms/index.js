import React, { useState } from "react";
import Alternative from './Alternative'
import * as S from './styled'

const Forms = () => {
  const [number, setNumber] = useState(() => {
    const number = localStorage.getItem('number')
    if (number) { return number }
    return "0"
  });

  function changeNumber(e) {
    setNumber(e.target.value)
    localStorage.setItem('number', e.target.value)
  }

  return (
    <S.FormsWrapper>
      <S.FormsQuestion>
        Question
        <S.FormsNumber
          title='Question number'
          name='Question number'
          id='number'
          type='number'
          placeholder='0'
          value={number}
          onChange={changeNumber}
          min='0'
        />
      </S.FormsQuestion>
      <Alternative />
    </S.FormsWrapper>
  )
}


export default Forms