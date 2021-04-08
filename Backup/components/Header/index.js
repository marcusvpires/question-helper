import React from "react";
import * as S from "./styled";

export function Header({ form,isArchivePage }) {
   
  function changeRepository(e) {
    form.set('repository', e.target.value)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderRepository
        type="text"
        name="Repository name"
        title="Repository name"
        placeholder="Repository"
        value={isArchivePage ? 'Repositories' : form.repository}
        onChange={changeRepository}
        disabled={isArchivePage}
      />
    </S.HeaderWrapper>
  );
}

export default Header;