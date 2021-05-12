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
      name: "Novo repositório",
      onClick: () => {
        alert('newRepositoryAlert', 'Repositório criado com sucesso', 'info')
        newRepository('Indefinido', isRepoPage)
      },
      icon: <I.AddToQueue />,
      more: () => {
        input(
          'repositoryName',
          { title:  'Criar novo repositório', question: 'Digite o nome do repositório'}, newRepository, [isRepoPage]
        )
      }
    },
    {
      name: "Copiar questões",
      onClick: () => { 
        alert('copyAlert', 'Questões copiadas com sucesso', 'info')
        QuickCopy("Questão [number] - [value]")
      },
      icon: <I.CopyAlt />,
      more: displayCopy,
    },
    {
      name: "Limpar seção",
      onClick: () => { 
        confirm( 
          'confirmClear', {
            title: 'Você deseja limpar o repositório atual ?',
            desc: 'Todas as questões neste repositório, incluindo as informações no formulário serão excluídas permanentemente',
          }, clearSection,
          [ isRepoPage ]
        )
      },
      icon: <I.Brush />,
    },
    {
      name: "Exportar",
      onClick: exportDatabase,
      icon: <I.CopyAlt />,
      onlyPC: true
    },
    {
      name: "Importar",
      onClick: importDatabase,
      icon: <I.CopyAlt />,
      onlyPC: true
    },
    {
      name: "Repositórios",
      onClick: () => { history.push("/repositories") },
      icon: <I.FolderOpen />,
    },
  ];

  if (isRepoPage) {
    let index = 5
    if (window.innerWidth < 768) {
      index = 3
    }
    navButtonList[index] = {
      name: "Edit repository",
      onClick: () => { history.push("/") },
      icon: <I.Edit />,
    }
  }

  return (
    <S.NavWrapper>
      {navButtonList.map((e) => (
        <S.NavItem name={e.name} title={e.name} key={e.name} onlyPC={e.onlyPC}>
          <S.NavButton onClick={e.onClick} onDoubleClick={e.more}>
            <S.NavIcon>{e.icon}</S.NavIcon>
            <S.NavText>{e.name}</S.NavText>
          </S.NavButton>
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

export default Navbar;
 