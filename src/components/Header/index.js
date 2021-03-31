import React, { useState } from "react";
import * as S from "./styled";

export function Header() {
  const [repository, setRepository] = useState("");
  
  function changeRepository(e) {
    setRepository(e.target.value)
    localStorage.setItem('repository', e.target.value)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderRepository
        type="text"
        name="Repository name"
        title="Repository name"
        placeholder="Repository"
        value={repository}
        onChange={changeRepository}
        />
    </S.HeaderWrapper>
  );
}

export default Header;