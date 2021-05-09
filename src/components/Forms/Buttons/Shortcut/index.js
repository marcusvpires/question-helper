import React, { useState } from "react";
import { build } from "../../../../storage/question";

import * as S from "./styled";

const Shortcut = ({ resetTimer }) => {

  const [shortcut, setShortcut] = useState('')
  const [isValid, setValid] = useState(true)

  const handleShortcut = (ev) => {
    let value = ev.target.value.toUpperCase().slice(-1)
    const valid = ['A','B','C','D','E','1','2','3','4','5']
    if (valid.indexOf(value) !== -1) {
      if (Number(value)) { value = valid[Number(value) - 1] }
      build("alternative", value)
      resetTimer()
      setValid(true)
    } else { setValid(false) }
    setShortcut(value)
  }

  return (
    <S.ShortcutWrapper>
      <S.Shortcut
        value={shortcut}
        onChange={handleShortcut}
        aria-label="Atalho de questões"
        aria-required="true"
        placeholder='Atalho'
        valid={isValid}
      />
    </S.ShortcutWrapper>
  );
};

export default Shortcut;
