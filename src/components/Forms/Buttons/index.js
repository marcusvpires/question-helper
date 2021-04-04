import React from "react";
import Timer from './Timer'
import Shortcut from './Shortcut'

import * as S from "./styled";

const FormButtons = ({ createQuestion }) => {

  return (
    <S.BtnWrapper>
      <S.Button
        onClick={() => {
          const alternatives = ["A", "B", "C", "D", "E"];
          createQuestion(alternatives[5 * Math.random() | 0], 'alternative')
        }}
      >Random</S.Button>
      <Shortcut createQuestion={createQuestion} />
      <Timer />
    </S.BtnWrapper>
  );
};

export default FormButtons;
