import React from "react";
import * as questionStorage from '../../storage/question'

import { getIndex } from "../../dataBase/root";

import * as S from "./styled";

const Repository = ({ repository, selectRepository, setSelectRepository }) => {

  const date = toDate(repository.id)
  const isSelect = selectRepository === repository.id

  const displayQuestions = () => {
    document.getElementById('questionSection').innerHTML = ''
    setSelectRepository(repository.id)
    console.log(repository.id)
    getIndex("question", "repositoryID", repository.id, (questions) => {
      for (const index in questions) {
        questionStorage.create(questions[index])
      }
    })
  }

  return (
    <S.Repository id={repository.id} onClick={displayQuestions} isSelect={isSelect} >
      <S.RepositoryName>{repository.name}</S.RepositoryName>
      <S.RepositoryDate>{date}</S.RepositoryDate>
    </S.Repository>
  )
};

export const toDate = (id) => {
  const time = new Date(id.split('-')[0] * 1000)
  const dd = String(time.getDate()).padStart(2, '0')
  const mm = String(time.getMonth() + 1).padStart(2, '0')
  return(dd + '/' + mm  + '/' + time.getFullYear())
}

export default Repository;
