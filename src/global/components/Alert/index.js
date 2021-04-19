import React, { useEffect, useState } from "react";
import { render } from "react-dom";

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from '../../Design'

/* ------------------------------------------------------------------------------- "/"

  Render element and add directly in root
  To call function displayAlert(id, info, type[info, warn])

/" ------------------------------------------------------------------------------ */

const displayAlert = (id, info, type) => {
  const element = document.createElement('div')
  element.id = id
  console.log(element)
  document.getElementById('root').appendChild(element)
  render (
    <Alert id={id} info={info} type={type} />,
    document.getElementById(id)
  )
}

const Alert = ({ id, info, type }) =>  {
  const [reverse, setReverse] = useState(false)
  const options = { info: { color: 'var(--blueDark)', icon: <I.Bell /> }}
  useEffect(() => {
    setTimeout(() => {
      document.getElementById(id).remove()
    }, 4000)
  })
  return (
    <S.Position>
    <S.Container>
    <S.Wrapper reverse={reverse} back={options[type].color} >
      <D.Flex color='#3e93ff'>
        <D.Icon size='1.5rem'>{options[type].icon}</D.Icon>
        <D.h3>{info}</D.h3>
      </D.Flex>
    </S.Wrapper>
    </S.Container>
    </S.Position>
)}

export default displayAlert