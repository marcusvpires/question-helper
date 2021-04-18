import React, { Fragment, useState } from "react";

import { render } from "react-dom";
import { screen } from "../assets";

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from '../../Design'

const displayErroBox = (id, message) => {
  screen(id)
  render (
    <ErroBox id={id} message={message} />,
    document.getElementById(id)
  )
}

const ErroBox = ({ id, message }) =>  {
  const [reverse, setReverse] = useState(false)
  return (
  <Fragment>
    <D.PopBack />
    <D.Popup>
      <S.Wrapper reverse={reverse} >
        <D.Flex color='#ff908b'>
          <D.Icon size='2rem'><I.Error /></D.Icon>
          <D.Strong>{message.title}</D.Strong>
        </D.Flex>
        <D.Text>{message.desc}</D.Text>
        <D.Flex justify='end'>
          <D.Button onClick={() => {
            setReverse(true)
            setTimeout(() => { document.getElementById(id).remove() }, 150)
          }}>Confirm</D.Button>
        </D.Flex>
      </S.Wrapper>
    </D.Popup>
  </Fragment>
)}

export default displayErroBox