import React, { Fragment, useState } from "react";
import { render } from "react-dom";

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from '../../../Design'

/* ------------------------------------------------------------------------------- "/"

  Render element and add directly in root
  To call function displayAlert(id, info, type[info, warn])

/" ------------------------------------------------------------------------------ */

const displayAlert = (id, info, type) => {
  const element = document.createElement('div')
  element.id = id
  document.getElementById(id).appendChild(element)
  render (
    <Alert id={id} info={info} type={type} />,
    document.getElementById(id)
  )
}

const Alert = ({ id, info, type }) =>  {
  const [reverse, setReverse] = useState(false)
  const options = {
    info: { color: 'red', icon: <I.File /> }
  }
  return (
    <S.Wrapper reverse={reverse} back={options[type].color} >
      <D.Flex color='#3e93ff'>
        <D.Icon size='2rem'>{options[type].icon}</D.Icon>
        <D.Strong>{info}</D.Strong>
      </D.Flex>
    </S.Wrapper>
)}

export default displayAlert