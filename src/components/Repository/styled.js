import styled from "styled-components"

export const Repository = styled.div`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 1.2rem;
  background-color: ${props => props.isSelect ? '#06090c' : 'var(--back)'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid ${props => props.isSelect ? '#0039aa' : '#575f66'};
  transition: 200ms;

  &:hover {
    background-color: #06090c;
  }
`

export const RepositoryName = styled.span`
  font-size: 1.2rem;
`

export const RepositoryDate = styled.span`
  font-size: 1.2rem;
`