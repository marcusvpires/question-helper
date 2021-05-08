import React from "react";
import * as storage from '../../storage/repository'

import { Github } from '@styled-icons/boxicons-logos/Github'
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock'
import { LinkedinBox } from '@styled-icons/remix-fill/LinkedinBox'

import * as S from "./styled";
// import * as D from "../../global/Design"

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
      <S.HeaderLinks>
        <S.HeaderLink href='https://www.linkedin.com/in/marcus-vinicius-almeida-pires-b194691b6/' >
          <S.HeaderIcon><LinkedinBox /></S.HeaderIcon>
          <S.HeaderLabel>Linkedin</S.HeaderLabel>
        </S.HeaderLink>

        <S.HeaderRedirect to='/about' >
          <S.HeaderIcon><CodeBlock /></S.HeaderIcon>
          <S.HeaderLabel>About</S.HeaderLabel>
        </S.HeaderRedirect>

        <S.HeaderLink href='https://github.com/M4rcusVinicius/question-helper' target="_blank" >
          <S.HeaderIcon><Github /></S.HeaderIcon>
          <S.HeaderLabel>Github</S.HeaderLabel>
        </S.HeaderLink>
      </S.HeaderLinks>
    </S.HeaderWrapper>
  );
}

export default Header;