import styled from "styled-components"

export const Wrapper = styled.div`
`

export const Cog = styled.div`
  font-size: 25px;
  border-radius: .25em;
  border: solid .55em var(--cog-colour, #EEE);
  display: inline-block;
  padding: 1.125em;
  position: absolute;
  top: inherit;
  left: inherit;
  -webkit-animation: rotate var(--cog-speed, 3s) linear infinite;
  -moz-animation: rotate var(--cog-speed, 3s) linear infinite;
  animation: rotate var(--cog-speed, 3s) linear infinite;

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

  @-moz-keyframes rotate { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes rotate { 100% { -webkit-transform: rotate(360deg); } }
`
