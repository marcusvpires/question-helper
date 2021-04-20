import styled, { keyframes } from "styled-components"
import media from "styled-media-query"


export const BtnWrapper = styled.div`
 ${media.lessThan("large")`
    position: relative;
  `}
`

const fadeIn = keyframes`
  0% {
   opacity: 0;
   transform: scale(0.5);
   left: -3.5;
   top: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    left: -7;
    top: 2;
  }
`

const fadeOut = keyframes`
  0% {
   opacity: 1;
   transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: ${props => props.compact ? 'auto' : '9rem'};
  ${media.lessThan("large")`
    animation: 150ms ${props => !props.show ? fadeOut : fadeIn } linear 1;
    ${props => props.show ? `
      opacity: 1;
      transform: scale(1);
    ` : `
      opacity: 0;
      transform: scale(0);
    ` } linear 1;
    position: absolute;
    background-color: var(--black);
    left: -7rem;
    top: 2rem;
    padding: .5rem;
    border-radius: 5px 0 5px 5px;
    z-index: 10;
  `} 
`


export const Compact = styled.div`
`

export const CompactButtons = styled.div`
  display: none;
  ${media.lessThan("large")`
    display: block;
  `}
`


