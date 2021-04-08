import styled from "styled-components"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 9rem;
`

export const BtnIcon = styled.span`
  cursor: pointer;
  width: 1.8rem;
  padding: 0.3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: ${props => props.marker ? `var(--${props.marker})` : 'var(--secondary)'};
  transform: ${props => props.rotate ? `rotate(${props.rotate})` : 'none'};
  transition: 200ms;


  &:hover {
    background-color: var(--blueDark)
  }
`

