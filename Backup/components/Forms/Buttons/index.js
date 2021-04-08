import React from "react";
import Timer from './Timer'
import Shortcut from './Shortcut'

import * as S from "./styled";

const FormButtons = ({ createQuestion, timer }) => {

  return (
    <S.BtnWrapper>
      <S.Button
        onClick={() => {
          const alternatives = ["A", "B", "C", "D", "E"];
          createQuestion(alternatives[5 * Math.random() | 0], 'alternative')
        }}
      >Random</S.Button>
      <Shortcut createQuestion={createQuestion} />
      <Timer timer={timer.timer} isActive={timer.isActive} handleStart={timer.handleStart} handlePause={timer.handlePause} setTimer={timer.setTimer} />
    </S.BtnWrapper>
  );
};

export default FormButtons;
