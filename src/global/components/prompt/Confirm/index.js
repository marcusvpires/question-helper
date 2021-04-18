import React, { Fragment, useState } from "react";

import { render } from "react-dom";
import { screen } from "../../assets";

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from '../../../Design'

/* ------------------------------------------------------------------------------- "/"

  Render element and add directly in root
  To call function displayConfirm('id', {
    title: --------------,
    desc: ---------------,
    back: ---------------,
    props: { --:--, ... },
  })

/" ------------------------------------------------------------------------------ */

const displayConfirm = (id, message, back, props) => {
  screen(id)
  if (!back) { console.warn(`The confirm message ${message.title} don't have return`) }
  render (
    <Confirm id={id} message={message} back={back} props={props} />,
    document.getElementById(id)
  )
}

const Confirm = ({ id, message, back, props }) =>  {
  const [reverse, setReverse] = useState(false)
  return (
  <Fragment>
    <D.PopBack />
    <D.Popup>
      <S.Wrapper reverse={reverse} >
        <D.Flex color='#3e93ff'>
          <D.Icon size='2rem'><I.Error /></D.Icon>
          <D.Strong>{message.title}</D.Strong>
        </D.Flex>
        <D.Text>{message.desc}</D.Text>
        <D.Flex justify='end'>
          <D.Button margin='0 1rem' onClick={() => {
            setReverse(true)
            setTimeout(() => { document.getElementById(id).remove() }, 150)
          }}>Cancel</D.Button>
          <D.Button onClick={() => {
            setReverse(true)
            setTimeout(() => {
              document.getElementById(id).remove()
              if (back) { back(...props) }
            }, 150)
          }}>Confirm</D.Button>
        </D.Flex>
      </S.Wrapper>
    </D.Popup>
  </Fragment>
)}

export default displayConfirm