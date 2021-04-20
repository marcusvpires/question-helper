import React from "react";
import * as storage from "../../storage/repository";

import * as S from "./styled";
import * as I from '@styled-icons/boxicons-regular/'


const Repository = ({ repository }) => {

  const [repositoryName, setRepositoryName] = React.useState(repository.name)
  
  function changeRepository(e) {
    setRepositoryName(e.target.value)
    localStorage.setItem('repository', e.target.value)
  }

  const id = repository.id
  const date = id.split("-")[1];

  const remove = () => {
    if (id === localStorage.getItem('repositoryID')) {
      localStorage.removeItem('repositoryID')
    }
    storage.remove(id)
  }
  return (
    <S.Repository>
      <S.RepositoryName
        type="text"
        name="Repository name"
        title="Repository name"
        placeholder="Undefined"
        value={repositoryName}
        onClick={() => { storage.displayQuestions(repository) }}
        onChange={changeRepository}
        onBlur={() => { storage.saveName(id, repositoryName) }}
      />
      <S.RepositoryDate>{date}</S.RepositoryDate>
      <S.RepositoryIcons>
        <S.RepositoryButton onClick={() => { storage.displayQuestions(repository) }} ><I.FolderOpen /></S.RepositoryButton>
        <S.RepositoryButton onClick={remove} ><I.Trash /></S.RepositoryButton>
      </S.RepositoryIcons>
    </S.Repository>
  );
};

export default Repository;
