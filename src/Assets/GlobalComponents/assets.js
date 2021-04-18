import styled from "styled-components"

export const screen = (id) => {
  const element = document.createElement('div')
  element.id = id
  element.classList.add('screen')
  const root = document.getElementById('root')
  root.appendChild(element)
}

export const PopUp = ({ children }) => {
  <PopWrapper>
    <PopBack />
    {children}
  </PopWrapper>
}

export const PopWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
`

export const PopBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
`