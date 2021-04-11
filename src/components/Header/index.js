import React from "react";
import * as storage from '../../storage/repository'

import * as S from "./styled";

export function Header({ isRepoPage }) {

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
        value={isRepoPage ? 'Repositories' : repository}
        disabled={isRepoPage}
        onChange={changeRepository}
        onBlur={storage.save}
      />
    </S.HeaderWrapper>
  );
}

export default Header;