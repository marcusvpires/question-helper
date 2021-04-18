import styled from "styled-components"

export const style = {
  border: 'border: 1px solid var(--third); border-radius: 5px;'
}

export const Icon = styled.div`
  margin-right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const PopBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
`

export const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`