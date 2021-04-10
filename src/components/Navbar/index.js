import React from "react"
import { repositoryDB  } from '../../dataBase'
import * as storage from '../../assets/storage'
import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled"

const Navbar = ({ setRepository }) => {

  function newRepository() {
    repositoryDB.new()
    setRepository('')
    document.getElementById('questionSection').innerHTML = ''
    localStorage.removeItem("number");
    localStorage.removeItem('text')
  }
  function copyQuestions() {
    console.log('Copy questions')
  }
  function clearSection() {
    setRepository('')
    storage.clear()
  }
  function openTrash() {
    console.log('Open trash')
  }
  function folderOpen() {
    console.log('Open folder')
  }

  const navButtonList = [
    {name: 'New repository', onClick: newRepository, icon: (<I.AddToQueue />)},
    {name: 'Clear section', onClick: clearSection, icon: (<I.Brush />)},
    {name: 'Copy questions', onClick: copyQuestions, icon: (<I.CopyAlt />)},
    {name: 'Open folder', onClick: folderOpen, icon: (<I.FolderOpen />)},
    {name: 'Open trash', onClick: openTrash, icon: (<I.Trash />)},
  ]
  
  return (
    <S.NavWrapper>

      {navButtonList.map(e => (
        <S.NavButton name={e.name} title={e.name} key={e.name} onClick={e.onClick}>
          <S.NavIcon>{e.icon}</S.NavIcon> 
          <S.NavText>{e.name}</S.NavText> 
        </S.NavButton>
      ))}
    </S.NavWrapper>
  )
}


export default Navbar