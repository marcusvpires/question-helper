import React from "react";
import * as S from "./styled";

const FormText = ({ form }) => {

  return (
    <S.TextWrapper>
      <S.TextArea
        name={'Text question input'}
        title={'Text question input'}
        value={form.text}
        placeholder='Type a text question here...'
        onChange={({target: {value}}) => {
          form.set('text', value)
        }}
      />
    </S.TextWrapper>
  );
};

export default FormText;
