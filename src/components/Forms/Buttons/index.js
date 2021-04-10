import React from "react";
import { build } from "../../../storage/question";
import Timer from './Timer'
import Shortcut from './Shortcut'

import * as S from "./styled";

const FormButtons = ({ timer }) => {

  return (
    <S.BtnWrapper>
      <S.Button
        onClick={() => {
          const alternatives = ["A", "B", "C", "D", "E"];
          build("alternative", alternatives[5 * Math.random() | 0])
        }}
      >Random</S.Button>
      <Shortcut />
      <Timer timer={timer.timer} isActive={timer.isActive} handleStart={timer.handleStart} handlePause={timer.handlePause} setTimer={timer.setTimer} />
    </S.BtnWrapper>
  );
};

export default FormButtons;
