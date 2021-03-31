import styled from "styled-components"

export const NavWrapper = styled.section`
  background-color: var(--back);
  height: 100vh;
  width: 12.5rem;
  position: absolute;
  padding-top: 5rem;
`

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 2px;
  color: var(--primary);
  cursor: pointer;
  padding: 1.2rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  transition: 200ms;

  &:hover {
    background-color: var(--hover)
  }
`

export const NavText = styled.span`
  text-align: start;
  font-size: 1rem;
`

export const NavIcon = styled.div`
  margin-right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
`