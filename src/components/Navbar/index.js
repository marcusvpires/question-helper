import React from "react";
import { useHistory } from "react-router-dom";

import { clearForm, displayCopy, QuickCopy } from "../../storage/question";
import * as repository from "../../storage/repository";

import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Navbar = ({ isRepoPage }) => {
  let history = useHistory()

  function newRepository() {
    repository.add();
    localStorage.setItem('repository', 'Undefined')
    if (isRepoPage) {
      repository.build();
    } else {
      clearForm();
    }
  }
  function clearSection() {
    if (isRepoPage) {
      document.getElementById('questionSection').innerHTML = ''
      const prev = localStorage.getItem('repositoryID')
      if (prev) { 
        const prevElement = document.getElementById(prev).children[0].style
        prevElement.border = '1px solid #575f66'
        prevElement.backgroundColor = 'var(--back)'
      }
    }
    else { clearForm() }
  }
  function copy() {
    console.log(QuickCopy('Questão [number] - [value]'))
  }
  function repositories() {
    history.push('/repositories')
  }
  function openTrash() {
    console.log("Open trash");
  }
  function editRepository() {
    history.push('/')
  }

  const navButtonList = [
    { name: "New repository", onClick: newRepository, icon: <I.AddToQueue /> },
    { name: "Clear section", onClick: clearSection, icon: <I.Brush /> },
    { name: "Copy questions", onClick: copy, icon: <I.CopyAlt />, more: displayCopy },
    { name: "Repositories", onClick: repositories, icon: <I.FolderOpen /> },
    { name: "Open trash", onClick: openTrash, icon: <I.Trash /> },
  ]

  if (isRepoPage) {
    navButtonList[3] = { name: "Edit repository", onClick: editRepository, icon: <I.Edit /> }
  }

  return (
    <S.NavWrapper>
      {navButtonList.map((e) => (
        <S.NavItem>
          <S.NavButton
            name={e.name}
            title={e.name}
            key={e.name}
            onClick={e.onClick}
          >
            <S.NavIcon>{e.icon}</S.NavIcon>
            <S.NavText>{e.name}</S.NavText>
          </S.NavButton>
          { e.more && 
            <S.NavMore onClick={e.more}>
              <S.NavMoreIcon><I.RightArrow /></S.NavMoreIcon>
            </S.NavMore>
          }
        </S.NavItem>
      ))}
    </S.NavWrapper>
  );
};

export default Navbar;
