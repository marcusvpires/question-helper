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
        name={'Text question input'}
        title={'Text question input'}
        placeholder='Type a text question here...'
        value={text}
        onChange={handleText}
      />
    </S.TextWrapper>
  );
};

export default FormText;
