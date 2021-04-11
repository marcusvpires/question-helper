import styled from "styled-components";

export const Repository = styled.div`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 1.2rem;
  background-color: var(--back);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #575f66;
  transition: 200ms;

  &:hover {
    background-color: #06090c;
  }
`;

export const RepositoryName = styled.span`
  font-size: 1.2rem;
`;

export const RepositoryDate = styled.span`
  font-size: 1.2rem;
`;

export const RepositoryButton = styled.div`
  cursor: pointer;
  width: 1.8rem;
  padding: 0.3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: var(--secondary);
  transition: 200ms;

  &:hover {
    background-color: var(--blueDark);
  }
`;
