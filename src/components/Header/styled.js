import styled from "styled-components"

export const HeaderWrapper = styled.section`
  background-color: var(--back);
  height: 5rem;
  width: 100%;
  position: absolute;
  border-bottom: 1px solid #6f757a;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  &:focus {
    outline: none;
  }
`

export const HeaderRepository = styled.input`
  font-size: 1.4rem;
`

export const HeaderLink = styled.a`
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

export const HeaderIcon = styled.div`
  margin-right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const HeaderLabel = styled.span`
  font-size: 1.1rem;
`