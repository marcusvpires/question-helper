import React, { useState } from "react";
import { build } from "../../../../storage/question";

import * as S from "./styled";

const Shortcut = () => {

  const [shortcut, setShortcut] = useState('')
  const [isValid, setValid] = useState(true)

  const handleShortcut = (ev) => {
    let value = ev.target.value.toUpperCase().slice(-1)
    const valid = ['A','B','C','D','E','1','2','3','4','5']
    if (valid.indexOf(value) !== -1) {
      setValid(true)
      if (Number(value)) { value = valid[Number(value) - 1] }
      build(value, "alternative")
    } else { setValid(false) }
    setShortcut(value)
  }

  return (
    <S.ShortcutWrapper>
      <S.Shortcut
        value={shortcut}
        onChange={handleShortcut}
        placeholder='Shortcut'
        valid={isValid}
      />
    </S.ShortcutWrapper>
  );
};

export default Shortcut;
