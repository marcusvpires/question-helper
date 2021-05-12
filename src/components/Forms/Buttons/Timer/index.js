import React, { useState, useEffects } from "react";
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Timer = ({ timer }) => {

  return (
    <S.TimerWrapper>
      <S.Time>
        <S.Minutes
          type="number"
          value="01"
        />:
        <S.Seconds
          type="number"
          value="54"
        />
      </S.Time>
      {!timer.isActive ? (
        <S.TimerButton onClick={timer.handleStart}>
          <S.Label>Iniciar</S.Label>
          <S.Icon>
            <I.Play />
          </S.Icon>
        </S.TimerButton>
      ) : (
        <S.TimerButton onClick={timer.handlePause}>
          <S.Label>Parar</S.Label>
          <S.Icon>
            <I.Pause />
          </S.Icon>
        </S.TimerButton>
      )}
    </S.TimerWrapper>
  );
};

export default Timer;
