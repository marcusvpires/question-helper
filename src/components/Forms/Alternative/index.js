import React from "react";
import { build } from "../../../storage/question";
import * as S from "./styled";

const Alternative = ({ resetTimer }) => {
  const alternatives = ["A", "B", "C", "D", "E", ""];

  return (
    <S.AltWrapper>
      {alternatives.map((alt) => {
        const name = "Alternative " + alt;
        return (
          <S.AltButton
            name={name}
            title={name}
            arial-label={name}
            arial-required="true"
            onClick={(ev) => {
              build("alternative", ev.target.value);
              resetTimer()
            }}
            key={name}
            value={alt}
          >
            {alt}
          </S.AltButton>
        );
      })}
    </S.AltWrapper>
  );
};

export default Alternative;
