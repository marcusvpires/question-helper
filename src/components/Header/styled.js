import styled from "styled-components"
import { Link } from "react-router-dom";
import media from "styled-media-query"

export const Wrapper = styled.section`
  background-color: var(--back);
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid #6f757a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  ${media.lessThan("400px")`
    height: 4.4rem;
    padding: .8rem .8rem;
    position: fixed;
  `}

  &:focus {
    outline: none;
  }
`

export const RepositoryName = styled.input`
  font-size: 1.4rem;
  width: 34rem;

  ${media.lessThan("400px")`
    font-size: 1.1rem;
    width: 9rem;
  `}
`

export const LinksContainer = styled.div`
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

  ${media.lessThan("400px")`
    margin: 0;
  `}
`

export const HeaderIcon = styled.div`
  margin-right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const HeaderLabel = styled.span`
  font-size: 1.1rem;
  ${media.lessThan("400px")`
    display: none;
  `}
`