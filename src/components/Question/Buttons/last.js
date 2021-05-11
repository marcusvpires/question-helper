import React, { useState } from "react";

import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";
import * as D from "../../../global/Design";

const Buttons = ({ question, type, displayText, text, save, remove }) => {
  const [marker, setMarker] = useState(question.attributes.marker);
  const [show, setShow] = useState(false)
  const id = question.id

  const isMarker = (Marker) => { if (marker === Marker) { return `var(--${Marker}Icon)`; } };

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
    {name: 'Marcar questão',  icon: <I.Bookmark />, marker: "marker"},
    {name: 'Marcar questão como correto', icon: <I.CheckSquare />, marker: "correct"},
    {name: 'Marcar questão como erro', icon: <I.ErrorAlt />, marker: 'erro'},
    {name: 'Remover questão', icon: <I.Trash />, onClick: () => { remove(id) }},
  ]
  if(type === 'text') { buttons.unshift({
    name: 'Mostrar texto',
    icon: <I.CaretUpSquare />,
    onClick: () => { displayText()},
    color: text.color,
    rotate: text.rotate
  })}

  return (
    <S.BtnWrapper>
    <S.BtnContainer show={show} compact>
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
            <D.ButtonIcon size='1.8rem' key={btn.name}
              onClick={onClick}
              color={color}
              rotate={rotate}
            >{btn.icon}
            </D.ButtonIcon>
        )})}
      </S.BtnContainer>

      <S.CompactButtons>
        <D.ButtonIcon size='1.8rem' onClick={() => { setShow(!show) }}>
          <I.DotsVerticalRounded />
        </D.ButtonIcon>
      </S.CompactButtons>

    </S.BtnWrapper>
  );
};

export default Buttons;
