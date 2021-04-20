import React from "react";
import { useHistory } from "react-router-dom";

import { clearForm, displayCopy, QuickCopy } from "../../storage/question";
import { exportDatabase } from "../../storage/database";
import * as repository from "../../storage/repository";

import importDatabase from './ImportInput'
import erro from "../../global/components/prompt/Error";
import confirm from "../../global/components/prompt/Confirm";
import input from "../../global/components/prompt/Input";
import alert from '../../global/components/Alert'

import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Navbar = ({ isRepoPage }) => {
  let history = useHistory();

  const navButtonList = [
    {
      name: "New repository",
      onClick: () => {
        alert('newRepositoryAlert', 'Repository was created successfully', 'info')
        newRepository('Undefined', isRepoPage)
      },
      icon: <I.AddToQueue />,
      more: () => {
        input(
          'repositoryName',
          { title:  'Create new repository', question: 'Type the name of the repository'}, newRepository, [isRepoPage]
        )
      }
    },
    {
      name: "Copy questions",
      onClick: () => { 
        alert('copyAlert', 'Successfully copied questions', 'info')
        QuickCopy("Questão [number] - [value]")
      },
      icon: <I.CopyAlt />,
      more: displayCopy,
    },
    {
      name: "Clear section",
      onClick: () => { 
        confirm( 
          'confirmClear', {
            title: 'Want to clear the session ?',
            desc: 'All questions on this form together with all the information on the form will be permanently deleted',
          }, clearSection,
          [ isRepoPage ]
        )
      },
      icon: <I.Brush />,
    },
    {
      name: "Export",
      onClick: exportDatabase,
      icon: <I.CopyAlt />,
    },
    {
      name: "Import",
      onClick: importDatabase,
      icon: <I.CopyAlt />,
    },
    {
      name: "Repositories",
      onClick: () => { history.push("/repositories") },
      icon: <I.FolderOpen />,
    },
    {
      name: "Open trash",
      onClick: openTrash,
      icon: <I.Trash />
    },
  ];

  if (isRepoPage) {
      navButtonList[5] = {
      name: "Edit repository",
      onClick: () => { history.push("/") },
      icon: <I.Edit />,
    }
  }

  if (window.innerWidth < 768) {
    navButtonList.splice(3, 1)
    navButtonList.splice(4, 1)
  }

  return (
    <S.NavWrapper>
      {navButtonList.map((e) => (
        <S.NavItem name={e.name} title={e.name} key={e.name}>
          <S.NavButton onClick={e.onClick}>
            <S.NavIcon>{e.icon}</S.NavIcon>
            <S.NavText>{e.name}</S.NavText>
          </S.NavButton>
          {e.more && (
            <S.NavMore onClick={e.more}>
              <S.NavMoreIcon>
                <I.RightArrow />
              </S.NavMoreIcon>
            </S.NavMore>
          )}
        </S.NavItem>
      ))}
    </S.NavWrapper>
  );
};

const newRepository = (name, isRepoPage) => {
  try {
    localStorage.setItem("repository", name)
    if (isRepoPage) { repository.build(name) } 
    else {
      repository.add(false, name) 
      clearForm() 
    }
  } catch (ev) {
    const title = "Error creating a new repository";
    console.error(title, ev);
    erro("errorNewRepository", { title: title} );
  }
};


const clearSection = (isRepoPage) => {
  try {
    repository.clear()
    if (isRepoPage) {
      document.getElementById("questionSection").innerHTML = "";
      const prev = localStorage.getItem("repositoryID");
      if (prev) {
        const prevElement = document.getElementById(prev).children[0].style;
        prevElement.border = "1px solid #575f66";
        prevElement.backgroundColor = "var(--back)";
      }
    } else { clearForm() }
  } catch (ev) {}
}

const openTrash = () => {
  const title = "Role in development"
  erro("errorTrash", { title: title })
}

export default Navbar;
 