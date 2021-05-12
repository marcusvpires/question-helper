import { style } from "../../global/Design";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

export const NavWrapper = styled.section`
  background-color: var(--back);
  height: calc(100vh - 4.8rem);
  width: 12.5rem;
  padding-top: 0.5rem;

  ${media.lessThan("1000px")`
    height: calc(100vh - 4.7rem);
    width: 3.5rem;
  `}
  
  ${media.lessThan("800px")` height: calc(100vh - 4.2rem); `}

  ${media.lessThan("700px")`
    height: calc(100vh - 4rem);
    position: fixed;
    top: 4rem;
  `}

  ${media.lessThan("600px")`
    display: flex;
    justify-content: space-around;
    padding: .2rem 1rem;
    height: 3.5rem;
    width: 100%;
    bottom: 0;
    top: unset;
  `}
`;

export const NavItem = styled.div`
  width: 100%;
  display: flex;
  ${media.lessThan("1000px")`
    justify-content: center;
  `}
  ${media.lessThan("600px")`
    ${props => props.onlyPC && `display: none;`}
    width: auto;
  `}
`;

export const NavButton = styled.button`
  background-color: transparent;
  color: var(--primary);
  border-radius: 2px;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 200ms;
  padding: 1.2rem 0.5rem 1.2rem 1rem;

  &:hover {
    background-color: var(--blueDark);
  }

  ${media.lessThan("600px")`
    border-radius: 5px;
    padding: 0 1.5rem;
  `}
  ${media.lessThan("500px")`
    padding: 0 1rem;
  `}
  ${media.lessThan("350px")`
    padding: 0 .4rem;
  `}
`;

export const NavText = styled.span`
  text-align: start;
  font-size: 1rem;

  ${media.lessThan("1000px")`
    display: none;
  `}
`;

export const NavIcon = styled.div`
  margin-right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;

  ${media.lessThan("1000px")`
    width: 1.4rem;
    height: 1.4rem;
    margin: 0;
  `}
`;

export const ImportWrapper = styled.div`
  ${style.border};
  width: 25rem;
  background-color: var(--back);
  padding: 1rem 1.5rem;
  animation: 150ms ${(props) => (props.reverse ? fadeOut : fadeIn)} linear 1;
`;

const fadeIn = keyframes`
 0% { transform: scale(.5); opacity: 0; }
 100% { transform: scale(1); opacity: 1; }
`;

const fadeOut = keyframes`
 0% { transform: scale(1); opacity: 1; }
 100% { transform: scale(.5); opacity: 0; }
`;
