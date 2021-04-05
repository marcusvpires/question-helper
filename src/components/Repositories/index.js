import React from "react";
import Repository from '../Repository'

import * as S from "./styled";

const Repositories = () => {

  const storage = [
    {id:"1617582350736-wsor8b4j",name:"Matematica"}
  ]

  return (
    <S.RepositoriesWrapper>
      <Repository repository={storage[0]}/>
    </S.RepositoriesWrapper>
  );
};


export default Repositories;
