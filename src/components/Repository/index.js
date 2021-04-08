import React from "react";
import * as storage from '../../assets/storage'
import { getIndex } from "../../dataBase/root";

import * as S from "./styled";

const Repository = ({ repository, selectRepository, setSelectRepository }) => {

  const date = storage.toDate(repository.id)
  const isSelect = selectRepository === repository.id

  const displayQuestions = () => {
    document.getElementById('questionSection').innerHTML = ''
    setSelectRepository(repository.id)
    console.log(repository.id)
    getIndex("question", "repositoryID", repository.id, (questions) => {
      for (const index in questions) {
        storage.create(questions[index])
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

export default Repository;
