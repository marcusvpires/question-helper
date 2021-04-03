import React from "react";
import * as storage from '../../../assets/storage'
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Buttons = ({ id, marker, type, displayText, text }) => {
  
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
        onClick={() => {console.log(id, "marker");}}
        marker={isMarker("marker")}
        ><I.Bookmark />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {console.log(id, "correct");}}
        marker={isMarker("correct")}
        ><I.CheckSquare />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {console.log(id, "erro");}}
        marker={isMarker("erro")}
        ><I.ErrorAlt />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => { storage.remove(id) }}
        ><I.Trash />
      </S.BtnIcon>
    </S.BtnWrapper>
  );
};

export default Buttons;
