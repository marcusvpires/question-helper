import React from "react";
import * as S from "./styled";

const FormNumber = () => {

  const [number, setNumber] = React.useState(() => {
    let number = localStorage.getItem('number')
    if (!number) { number = 1 }
    return number
  })

  const handleNumber = ev => {
    const value = ev.target.value
    localStorage.setItem('number', value)
    setNumber(value)
  }

  return (
    <S.NumberInput
      id='number'
      name='Número da questão'
      title='Número da questão'
      aria-label="Número da questão"
      aria-required="true"
      placeholder='0'
      value={number}
      onChange={handleNumber}
    />
  );
};

export default FormNumber;
