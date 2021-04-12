import React, { useState } from "react";
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Buttons = ({ question, type, displayText, text, save, remove }) => {
  const [marker, setMarker] = useState(question.attributes.marker);
  const id = question.id

  const isMarker = (btn) => {
    if (marker === btn) {
      return marker + "Icon";
    }
  };

  const handleMarker = (id, button) => {
    const element = document.getElementById(id).style
    if (marker === button) {
      element.backgroundColor = `var(--blueDark)`
      element.border = ``
      setMarker(null)
      question.attributes.marker = null
    }
    else {
      element.backgroundColor = `var(--${button})`
      element.border = `1px solid var(--${button}Icon)`
      question.attributes.marker = button
      setMarker(button)
    }
    save(question)
  }

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
        onClick={() => {handleMarker(id, "marker");}}
        marker={isMarker("marker")}
        ><I.Bookmark />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {handleMarker(id, "correct");}}
        marker={isMarker("correct")}
        ><I.CheckSquare />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => {handleMarker(id, "erro");}}
        marker={isMarker("erro")}
        ><I.ErrorAlt />
      </S.BtnIcon>
      <S.BtnIcon
        onClick={() => { remove(id) }}
        ><I.Trash />
      </S.BtnIcon>
    </S.BtnWrapper>
  );
};

export default Buttons;
