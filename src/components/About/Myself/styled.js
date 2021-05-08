import styled from "styled-components";
// import media from "styled-media-query"

export const Wrapper = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem;
`;

export const TextContainer = styled.div`
  width: 40%;
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

export const Link = styled.a`
  height: 2.5rem;
  width: 2.5rem;
  margin-right: .4rem;
  background-color: #092969;
  padding: .5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms;

  &:hover { background-color: #002d86; }
  &:focus { outline: none; }
`;


