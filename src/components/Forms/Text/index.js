import React from "react";
import * as S from "./styled";

const FormText = () => {

  const [text, setText] = React.useState(() => {
    let text = localStorage.getItem('text')
    if (!text) { text = '' }
    return text
  })

  const handleText = ev => {
    const value = ev.target.value
    localStorage.setItem('text', value)
    setText(value)
  }

  return (
    <S.TextWrapper>
      <S.TextArea
        id='text'
        aria-label='Formulário de texto'
        aria-required="true"
        name='Formulário de texto'
        title='Formulário de texto'
        placeholder='Digite as questões de texto aqui...'
        value={text}
        onChange={handleText}
      />
    </S.TextWrapper>
  );
};

export default FormText;
