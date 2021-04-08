import React from "react";
import * as S from "./styled";

const Text = ({ setValue, value, save }) => {

  return (
    <S.TextArea
      name={'Text question input'}
      title={'Text question input'}
      value={value}
      placeholder='Type a text question here...'
      onChange={(ev) => { setValue(ev.target.value) }}
      onBlur={(ev) => {
        save(ev.target.value)
      }}
    />
  );
};

export default Text;
