import styled from "styled-components"
import media from "styled-media-query"

export const AltWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 12.8rem;
`

export const AltList = styled.li`
`

export const AltLabel = styled.label`
  user-select: none;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  color: #b2b2b2;
  display:table-cell;
  vertical-align: middle;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px var(--third) solid;
  background-color: var(--backDark);
  transition: 200ms;
`

export const AltInput = styled.input`
  appearance: none;
  display: none;
  &:checked + ${AltLabel} {
    background-color: var(--blueDark);
  }

`
