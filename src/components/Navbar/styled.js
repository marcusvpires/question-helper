import { style } from '../../global/Design'
import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

export const NavWrapper = styled.section`
  background-color: var(--back);
  height: 100vh;
  width: 12.5rem;
  position: absolute;
  padding-top: 5rem;
  ${media.lessThan("large")`
    width: 3.8rem;
  `}
  ${media.lessThan("400px")`
    width: 100%;
    bottom: 0;
    display: flex;
    height: auto;
    z-index: 50;
    padding: 0;
    justify-content: space-around;
    position: fixed;
  `}
`

export const NavItem = styled.div`
  width: 100%;
  display: flex;
  ${media.lessThan("large")`
    width: auto;
  `}
`

export const NavMore = styled.button`
  color: var(--primary);
  background-color: transparent;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  
   &:hover {
    background-color: var(--blueDark)
  }

  ${media.lessThan("large")`
    display: none;
  `}
`

export const NavMoreIcon = styled.div`
  width: 1rem;
  height: 1rem;
`

export const NavButton = styled.button`
  color: var(--primary);
  background-color: transparent;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 1.2rem 0.5rem 1.2rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  transition: 200ms;

  &:hover {
    background-color: var(--blueDark)
  }

  ${media.lessThan("medium")`
    width: auto;
    border-radius: 10px;
  `}
`

export const NavText = styled.span`
  text-align: start;
  font-size: 1rem;
  ${media.lessThan("large")`
    display: none;
  `}
`

export const NavIcon = styled.div`
  margin-right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  ${media.lessThan("large")`
    margin: 0;
  `}
`


export const ImportWrapper = styled.div`
  ${style.border};
  width: 25rem;
  background-color: var(--back);
  padding: 1rem 1.5rem;
  animation: 150ms ${props => props.reverse ? fadeOut : fadeIn } linear 1;
`

const fadeIn = keyframes`
 0% { transform: scale(.5); opacity: 0; }
 100% { transform: scale(1); opacity: 1; }
`

const fadeOut = keyframes`
 0% { transform: scale(1); opacity: 1; }
 100% { transform: scale(.5); opacity: 0; }
`