import React from "react";
import * as storage from '../../assets/storage'

import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Repository = ({ repository, selectRepository, setSelectRepository }) => {

  const date = storage.toDate(repository.id)
  const isSelect = selectRepository === repository.id

  return (
    <S.Repository
      id={repository.id} 
      onClick={() => { setSelectRepository(repository.id); storage.repository.questions(repository.id) }}
      isSelect={isSelect} 
    >
      <S.RepositoryName>{repository.name}</S.RepositoryName>
      <S.RepositoryDate>{date}</S.RepositoryDate>
      <S.RepositoryTrash
        onClick={() => {  }}
        ><I.Trash />
      </S.RepositoryTrash>
      
    </S.Repository>
  )
};

export default Repository;
