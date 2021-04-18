import styled, { keyframes } from "styled-components"
import { style } from '../../Design'

const fadeIn = keyframes`
 0% { transform: scale(.5); opacity: 0; }
 100% { transform: scale(1); opacity: 1; }
`

const fadeOut = keyframes`
 0% { transform: scale(1); opacity: 1; }
 100% { transform: scale(.5); opacity: 0; }
`

export const Wrapper = styled.div`
  ${style.border};
  width: 25rem;
  background-color: var(--back);
  padding: 1rem 1.5rem;
  animation: 150ms ${props => props.reverse ? fadeOut : fadeIn } linear 1;
`