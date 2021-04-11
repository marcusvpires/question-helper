import React from "react";

import * as questionStorage from "../../storage/question";
import * as storage from "../../storage/repository";
import { getIndex } from "../../dataBase/root";

import * as S from "./styled";

const Repository = ({ repository }) => {
  const date = repository.id.split("-")[1];

  const displayQuestions = () => {
    storage.selectRepository(repository.id)
    document.getElementById("questionSection").innerHTML = "";
    getIndex("question", "repositoryID", repository.id, (questions) => {
      for (const index in questions) {
        questionStorage.create(questions[index]);
      }
    });
  };

  return (
    <S.Repository onClick={displayQuestions}>
      <S.RepositoryName>{repository.name}</S.RepositoryName>
      <S.RepositoryDate>{date}</S.RepositoryDate>
    </S.Repository>
  );
};

export default Repository;
