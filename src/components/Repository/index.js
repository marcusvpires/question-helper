import React from "react";
import * as S from "./styled";

const Repository = ({ repository }) => {

  return (
    <S.Repository id={repository.id}>
      <S.RepositoryName>{repository.name}</S.RepositoryName>
    </S.Repository>
  )
};

export default Repository;
