import React from "react";
import * as S from "./styled";

const FormText = () => {

  return (
    <S.TextWrapper>
      <S.TextArea
        name={'Text question input'}
        title={'Text question input'}
        placeholder='Type a text question here...'
        onChange={ev => { localStorage.setItem('text', ev.target.value) }}
      />
    </S.TextWrapper>
  );
};

export default FormText;
