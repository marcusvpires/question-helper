import styled from "styled-components"

export const AltWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const AltList = styled.li`
`

export const AltLabel = styled.label`
  user-select: none;
  cursor: pointer;
  font-size: 1.2rem;
  display:table-cell;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  border-radius: 50%;
  vertical-align: middle;
  color: var(--primary);
  border: 1px var(--third) solid;
  transition: 200ms;
`

export const AltInput = styled.input`
  appearance: none;
  display: none;
`
