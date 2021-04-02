import React from "react";
import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";

const Buttons = ({ question }) => {
  const id = question.id
  console.log(id)
  return (
    <S.BtnWrapper>
      <S.BtnIcon><I.CheckSquare /></S.BtnIcon>
      <S.BtnIcon><I.ErrorAlt /></S.BtnIcon>
      <S.BtnIcon><I.Bookmark /></S.BtnIcon>
      <S.BtnIcon><I.Trash /></S.BtnIcon>
    </S.BtnWrapper>
  );
};

export default Buttons;
