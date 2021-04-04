import React from "react";
import * as S from "./styled";

const FormButtons = () => {
  return (
    <S.BtnWrapper>

      <S.Button
        onClick={() => { console.log("Random");}}
      >Random</S.Button>

      <S.Button
        onClick={() => { console.log("Random");}}
      >Quick</S.Button>

      <S.Button
        onClick={() => { console.log("Random");}}
      >Timer</S.Button>

    </S.BtnWrapper>
  );
};

export default FormButtons;
