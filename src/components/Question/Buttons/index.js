import React, { Fragment, useState } from "react";
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";
import * as D from "../../../global/Design";

const Buttons = ({ question, type, displayText, text, save, remove }) => {
  const [marker, setMarker] = useState(question.attributes.marker);
  const id = question.id

  const isMarker = (btn) => { if (marker === btn) { return marker + "Icon"; } };

  const handleMarker = (id, button) => {
    console.info('Set marker', button, id)
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

  const buttons = [
    {name: 'Set attribute marker',  icon: <I.Bookmark />, marker: "marker"},
    {name: 'Set attribute correct', icon: <I.CheckSquare />, marker: "correct"},
    {name: 'Set attribute error', icon: <I.ErrorAlt />, marker: 'erro'},
    {name: 'Remove question', icon: <I.Trash />, onClick: () => { remove(id) }},
  ]
  if(type === 'text') { buttons.unshift({
    name: 'Display text',
    icon: <I.CaretUpSquare />,
    onClick: () => { displayText()},
    color: text.color,
    rotate: text.rotate
  })}

  return (
    <div>
      <S.BtnWrapper>
        {buttons.map(btn => {
          let onClick; let color; let rotate

          if (btn.onClick) { onClick = btn.onClick }
          if (btn.rotate) {
            rotate = text.rotate
            color = text.color
          }
          if (btn.marker) { 
            color=isMarker(btn.marker)
            onClick = () => {handleMarker(id, btn.marker)} 
          }
          return (
            <D.ButtonIcon size='1.8rem'
              onClick={onClick}
              color={color}
              rotate={rotate}
            >{btn.icon}
            </D.ButtonIcon>
        )})}
      </S.BtnWrapper>

      <S.CompactButtons>
        <D.ButtonIcon size='1.8rem'>
          <I.DotsVerticalRounded />
        </D.ButtonIcon>
      </S.CompactButtons>

    </div>
  );
};

export default Buttons;

/* 

      {type === "text" && (
        <S.BtnIcon
          onClick={() => { displayText();}}
          marker={text.color}
          rotate={text.rotate}
          ><I.CaretUpSquare />
        </S.BtnIcon>
      )}


      <S.BtnIcon
        onClick={() => {handleMarker(id, "erro");}}
        marker={isMarker("erro")}
        ><I.ErrorAlt />
      </S.BtnIcon>

      <S.BtnIcon
        onClick={() => { remove(id) }}
        ><I.Trash />
      </S.BtnIcon>

*/