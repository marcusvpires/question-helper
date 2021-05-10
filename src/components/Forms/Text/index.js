import React from "react";

import * as I from "@styled-icons/boxicons-regular"
import * as S from "./styled";

const FormText = () => {

  const [text, setText] = React.useState(() => {
    let text = localStorage.getItem('text')
    if (!text) { text = '' }
    return text
  })

  const [ mobileFocus, setMobileFocus] = React.useState(false)
  const [ questionNumber, setQuestionNumber] = React.useState(1)

  const handleText = ev => {
    const value = ev.target.value
    localStorage.setItem('text', value)
    setText(value)
  }

  const handleFocus = () => {
    if ( window.innerWidth <= 700) {
      const number = document.getElementById('number').value
      setQuestionNumber(number)
      setMobileFocus(true)
    }
  }

  const closeFocus = () => {
    setMobileFocus(false)
  }

  return (
    <S.TextWrapper
      mobileFocus={mobileFocus}
    >
      <S.TextHeader
        mobileFocus={mobileFocus}
        onClick={closeFocus}
      >
        <S.Question>
          Questão {questionNumber}
        </S.Question>
        <S.Close>
          <I.CaretDownSquare />
        </S.Close>
      </S.TextHeader>
      <S.TextArea
        id='text'
        aria-label='Formulário de texto'
        aria-required="true"
        name='Formulário de texto'
        title='Formulário de texto'
        placeholder='Digite as questões de texto aqui...'
        onFocus={handleFocus}
        value={text}
        onChange={handleText}
      />
    </S.TextWrapper>
  );
};

export default FormText;
