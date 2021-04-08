import React from "react"
import { Link } from "react-router-dom";

import { repositoryDB  } from '../../dataBase'
import * as Storage from '../../assets/storage'

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled"

const Navbar = ({ form }) => {

  function newRepository() {
    document.getElementById('questionSection').innerHTML = ''
    form.set('repository', 'Undefined')
    form.set('text', '')
    form.set('number', 1)
    repositoryDB.new() // Change to new storage
  }

  function copyQuestions() {
    console.log('Copy questions')
  }

  function clearSection() {
    form.set('text', '')
    form.set('number', 1)
    Storage.repository.clear()
  }

  const navButtonList = [
    {name: 'New repository', onClick: newRepository, icon: (<I.AddToQueue />)},
    {name: 'Clear section', onClick: clearSection, icon: (<I.Brush />)},
    {name: 'Copy questions', onClick: copyQuestions, icon: (<I.CopyAlt />)},
  ]
  
  return (
    <S.NavWrapper>

      {navButtonList.map(e => (
        <S.NavButton name={e.name} title={e.name} key={e.name} onClick={e.onClick}>
          <S.NavIcon>{e.icon}</S.NavIcon> 
          <S.NavText>{e.name}</S.NavText> 
        </S.NavButton>
      ))}
      <Link to='/archive'>
        <S.NavButton name={'Open folder'} title={'Open folder'}>
          <S.NavIcon><I.FolderOpen /></S.NavIcon> 
          <S.NavText>Open folder</S.NavText> 
        </S.NavButton>
      </Link>
      <Link to='/trash'>
        <S.NavButton name={'Open trash'} title={'Open trash'}>
          <S.NavIcon><I.Trash /></S.NavIcon> 
          <S.NavText>Open trash</S.NavText> 
        </S.NavButton>
      </Link>

    </S.NavWrapper>
  )
}


export default Navbar