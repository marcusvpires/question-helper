import React from "react";
import * as S from "./styled";

const Alternative = ({ createQuestion }) => {
  const alternatives = ["A", "B", "C", "D", "E", ""];

  return (
    <S.AltWrapper>
      {alternatives.map((alt) => {
        const name = "Alternative" + alt;
        return (
          <S.AltButton
            name={name}
            title={name}
            onClick={({target: {value}}) => {createQuestion(value, 'alternative')}}
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
