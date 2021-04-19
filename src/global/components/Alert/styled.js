import styled, { keyframes } from "styled-components"

const fade = keyframes`
 0%   { left: 40rem; }
 5%   { left:  0rem; }
 95%  { left:  0rem; }
 100% { left: 40rem; }
`

export const Position = styled.div`
  position: absolute;
  top: calc(100% - 5rem);
  left: 0;
  display: flex;
  justify-content: end;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  overflow: hidden;
`

export const Wrapper = styled.div`
  background-color: ${props => props.back};
  padding: .8rem 1.5rem .8rem 1rem;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px 0 0 5px;
  position: relative;
  z-index: 100;
  left: 40rem;
  animation: 4s ${fade} linear 1;
`