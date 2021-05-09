import React from "react";
import { build } from "../../../storage/question";

import Timer from "./Timer";
import Shortcut from "./Shortcut";
import Create from "./Create";

import * as S from "./styled";

const FormButtons = ({ timer }) => {
  return (
    <S.BtnWrapper>
      <S.Button
        onClick={() => {
          const alternatives = ["A", "B", "C", "D", "E"];
          build("alternative", alternatives[(5 * Math.random()) | 0]);
          timer.handleReset();
        }}
      >
        Random
      </S.Button>
      <Shortcut resetTimer={timer.handleReset} />
      <Timer
        timer={timer}
      />
      <S.Button
        onClick={() => {
          build("text");
          timer.handleReset()
        }}
      >
        Criar
      </S.Button>
    </S.BtnWrapper>
  );
};

export default FormButtons;
