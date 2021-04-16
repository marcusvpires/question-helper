import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const reverse = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Cog = styled.div`
  font-size: 4vh;
  border-radius: .25em;
  border: solid .55em var(--cog-colour, #EEE);
  display: inline-block;
  padding: 1.125em;
  animation: ${props => props.reverse ? rotate : reverse} 2.5s linear infinite;
  position: relative;
  top: 10rem;

  &::before {
    border: solid .55em var(--cog-colour, #EEE);
    padding: 1.125em;
    position: absolute;
    content: "";
    transform: translate(-1.675em, -1.675em) rotate(45deg);
    border-radius: .25em;
  }

  &::after {
    content: "";
    position: absolute;
    border: solid 1em var(--cog-colour, #EEE);
    padding:  .375em;
    border-radius: 1.8125em;
    transform: translate(-1.375em, -1.375em);
    filter: brightness(87.5%);
  }
`
