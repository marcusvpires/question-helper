import styled from "styled-components";
// import media from "styled-media-query"

export const Wrapper = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 5rem;
  background-color: var(--black);
`;

export const TextContainer = styled.div`
  width: 55%;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
`;

export const Image = styled.img`
  height: 30rem;
  width: 30rem;
  margin-right: 1rem;
`;


