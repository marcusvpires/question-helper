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
      name={'Question number'}
      title={'Question number'}
      placeholder='0'
      value={number}
      onChange={handleNumber}
    />
  );
};

export default FormNumber;
