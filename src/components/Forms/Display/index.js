import React from "react";
import { build } from "../../../storage/question";

import * as S from "./styled";

const FormDisplay = ({ resetTimer }) => {
  return (
    <S.DisplayWrapper>
      <S.Display
        onClick={() => {
          build("text");
          resetTimer()
      }}>
        Create
      </S.Display>
    </S.DisplayWrapper>
  );
};

export default FormDisplay;
