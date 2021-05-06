import styled from "styled-components"
import { Link } from "react-router-dom";
// import media from "styled-media-query"

export const Wrapper = styled.section`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`
export const LogoImage = styled.img`
  width: 2rem;
  height: 2rem;
`
export const LogoText = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	margin-left: 1rem;
`


export const HeaderLinks = styled.div`
  display: flex;
`

export const HeaderRedirect = styled(Link)`
  display: flex;
  color: var(--primary);
  text-decoration: none;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  transition: 200ms;

  &:hover {
    background-color: var(--blueDark);
  }
`

export const HeaderLink = styled.a`
  display: flex;
  color: var(--primary);
  text-decoration: none;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  transition: 200ms;
  margin: 0 1.5rem;

  &:hover {
    background-color: var(--blueDark);
  }
`

export const HeaderLabel = styled.span`
  font-size: 1.1rem;
`