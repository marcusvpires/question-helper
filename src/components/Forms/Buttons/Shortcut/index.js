import React, { useState } from "react";
import * as S from "./styled";

const Shortcut = () => {

  const [value, setValue] = useState('')

  const handleValue = (ev) => {
    console.log(ev.target.value)
  }

  return (
    <S.ShortcutWrapper>
      <S.Shortcut
        value={value}
        onChange={handleValue}
        placeholder='Shortcut'
      />
    </S.ShortcutWrapper>
  );
};

export default Shortcut;
