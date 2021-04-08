import React from "react";
import * as S from "./styled";

const FormText = ({ handleText, text }) => {
  console.log('Text:', text)

  return (
    <S.TextWrapper>
      <S.TextArea
        name={'Text question input'}
        title={'Text question input'}
        value={text}
        placeholder='Type a text question here...'
        onChange={ev => { handleText(ev.target.value) }}
      />
    </S.TextWrapper>
  );
};

export default FormText;
