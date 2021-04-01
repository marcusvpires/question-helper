import React from "react";
import { saveAlternative } from '../../../dataBase'
import * as S from "./styled";

const Alternative = () => {
  const alternatives = ["A", "B", "C", "D", "E", ""];

  function newAlternative(alt) { saveAlternative(alt.target.id) }

  return (
    <S.AltWrapper>
      {alternatives.map((alt) => {
        const name = "Alternative" + alt;
        return (
          <S.AltButton name={name} title={name} onClick={newAlternative} key={name} id={alt}>
            {alt}
          </S.AltButton>
        );
      })}
    </S.AltWrapper>
  );
};

export default Alternative;
