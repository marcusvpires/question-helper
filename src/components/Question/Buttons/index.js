import React from "react";
import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";

const Buttons = ({ question, storage }) => {
  return (
    <S.BtnWrapper>
      <S.BtnIcon><I.CheckSquare /></S.BtnIcon>
      <S.BtnIcon><I.ErrorAlt /></S.BtnIcon>
      <S.BtnIcon><I.Bookmark /></S.BtnIcon>
      <S.BtnIcon onClick={()=>{storage.remove(question.id)}} ><I.Trash /></S.BtnIcon>
    </S.BtnWrapper>
  );
};

export default Buttons;
