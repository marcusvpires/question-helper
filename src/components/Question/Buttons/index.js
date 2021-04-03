import React from "react";
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Buttons = ({ id, remove, changeMarker, marker, type, displayText, text }) => {
  const isMarker = (btn) => {
    if (marker === btn) {
      return marker + "Icon";
    }
  };

  return (
    <S.BtnWrapper>
      {type === "text" && (
        <S.BtnIcon
          onClick={() => { displayText();}}
          marker={text.color}
          rotate={text.rotate}
        ><I.CaretUpSquare />
        </S.BtnIcon>
      )}
      <S.BtnIcon
        onClick={() => {changeMarker(id, "marker");}}
        marker={isMarker("marker")}
      ><I.Bookmark />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {changeMarker(id, "correct");}}
        marker={isMarker("correct")}
      ><I.CheckSquare />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {changeMarker(id, "erro");}}
        marker={isMarker("erro")}
      ><I.ErrorAlt />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {remove(id);}}
      ><I.Trash />
      </S.BtnIcon>
    </S.BtnWrapper>
  );
};

export default Buttons;
