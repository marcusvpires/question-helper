import React from "react";
import { build } from "../../../../storage/question";

import * as S from "./styled";

const Create = ({ resetTimer }) => {
  return (
    <S.DisplayWrapper>
      <S.Display
        onClick={() => {
          build("text");
          resetTimer()
      }}>
        Criar
      </S.Display>
    </S.DisplayWrapper>
  );
};

export default Create;
