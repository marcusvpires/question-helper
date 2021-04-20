import styled from "styled-components"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: ${props => props.compact ? '1rem' : '9rem'};
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

export const CompactContainer = styled.div`
  position: relative;
`

export const Compact = styled.div`
  position: absolute;
  top: 2.2rem;
  left: -5.8rem;
  padding: .4rem;
  background-color: var(--black);
`

export const CompactButton = styled.div`

`


