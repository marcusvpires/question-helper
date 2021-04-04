import React from "react";
import * as S from "./styled";

const FormText = ({ setText, text }) => {

  return (
    <S.TextWrapper>
      <S.TextArea
        name={'Text question input'}
        title={'Text question input'}
        value={text}
        placeholder='Type a text question here...'
        onChange={({target: {value}}) => {
          setText(value)
          localStorage.setItem('text', value)
        }}
      />
    </S.TextWrapper>
  );
};

export default FormText;