import React from "react";
import { build } from "../../../storage/question";

import Timer from "./Timer";
import Shortcut from "./Shortcut";

import * as I from "@styled-icons/boxicons-regular";
import * as S from "./styled";

const FormButtons = ({ timer }) => {
  return (
    <S.BtnWrapper>
      <S.Button
        aria-label="Resposta aleatória [A, B, C, D, E]"
        aria-required="true"
        onClick={() => {
          const alternatives = ["A", "B", "C", "D", "E"];
          build("alternative", alternatives[(5 * Math.random()) | 0]);
          timer.handleReset();
        }}
      >
        <S.Icon>
          <I.Repost />
        </S.Icon>
        Chute
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
        <S.Icon>
          <I.ListPlus />
        </S.Icon>
        Criar
      </S.Button>
    </S.BtnWrapper>
  );
};

export default FormButtons;
