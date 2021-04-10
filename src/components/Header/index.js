import React from "react";
import * as S from "./styled";

export function Header() {

  const [repository, setRepository] = React.useState(() => {
    let repository = localStorage.getItem('repository')
    if (!repository) { repository = 'Undefined' }
    return repository
  })
  
  function changeRepository(e) {
    setRepository(e.target.value)
    localStorage.setItem('repository', e.target.value)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderRepository
        id='repository'
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