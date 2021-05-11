import styled, { keyframes } from "styled-components"
import media from "styled-media-query"


export const BtnWrapper = styled.div`

 ${media.lessThan("1400px")`
    position: relative;
  `}
`

const fadeIn = keyframes`
  0% {
   opacity: 0;
   transform: scale(0.5);
   right: -2rem;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    right: 0;
  }
`

const fadeOut = keyframes`
  0% {
   opacity: 1;
   right: 0;
   transform: scale(1);
  }
  100% {
    opacity: 0;
    right: -2rem;
    transform: scale(0.5);
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 9rem;

  ${media.lessThan("1400px")`
    width: auto;
    display: ${props => props.change ? "flex" : "none"};
    animation: 150ms ${props => props.show ? fadeIn : fadeOut } linear 1;
    ${props => props.show ? `
      opacity: 1;
      transform: scale(1);
    ` : `
      opacity: 0;
      transform: scale(0);
    ` } linear 1;
    position: absolute;
    background-color: var(--black);
    right: 0rem;
    top: -.5rem;
    padding: .5rem;
    border-radius: 5px 0 5px 5px;
    z-index: 10;
  `} 
`

export const Button = styled.div`
  cursor: pointer;
  height: 1.8rem;
  width: 1.8rem;
  padding: 0.3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: ${props => props.color ? props.color : 'var(--secondary)'};
  ${props => props.rotate && "transform: rotate(180deg);" }
  transition: 200ms;

  &:hover { background-color: var(--blueDark); }
`


export const Compact = styled.div`
`

export const CompactButtons = styled.div`
  display: none;

  ${media.lessThan("1400px")`
    display: block;
  `}
`


