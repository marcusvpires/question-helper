import React from "react";
import { build } from "../../../storage/question";
import * as S from "./styled";

const Alternative = () => {
  const alternatives = ["A", "B", "C", "D", "E", ""];

  return (
    <S.AltWrapper>
      {alternatives.map((alt) => {
        const name = "Alternative" + alt;
        return (
          <S.AltButton
            name={name}
            title={name}
            onClick={(ev) => {
              build(ev.target.value, "alternative");
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
