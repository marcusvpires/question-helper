import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

export const Wrapper = styled.section`
  border-bottom: 1px solid #6f757a;
  background-color: var(--back);
  height: 4.8rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    outline: none;
  }

  ${media.lessThan("1000px")` height: 4.7rem; `}

  ${media.lessThan("800px")` height: 4.2rem; `}

  ${media.lessThan("700px")`
    height: 4rem;
    position: fixed;
  `}

  ${media.lessThan("600px")`
    height: 4rem;
    position: unset;
  `}

  ${media.lessThan("400px")` padding: .8rem .8rem; `}
`;

export const RepositoryName = styled.input`
  font-size: 1.4rem;
  width: 34rem;
  height: 3rem;
  padding: 0;

  ${media.lessThan("1000px")` font-size: 1.3rem; `}

  ${media.lessThan("800px")` width: 5rem; `}

  ${media.lessThan("350px")` width: 5rem; `}
  
`;

export const LinksContainer = styled.div`
  display: flex;
  ${media.lessThan("350px")`
    display: none;
  `}
`;

export const Redirect = styled(Link)`
  text-decoration: none;
`;

export const Hyperlink = styled.a`
  text-decoration: none;
`;

export const HeaderLink = styled.div`
  display: flex;
  color: var(--primary);
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  transition: 200ms;
  margin: 0 1.5rem;

  &:hover {
    background-color: var(--blueDark);
  }

  ${media.lessThan("1000px")`
    padding: .4rem .7rem;
    margin: 0 1rem;
  `}

  ${media.lessThan("800px")`
    margin: 0 .2rem;
  `}

  ${media.lessThan("700px")`
    padding: .4rem;
    margin: 0 .2rem;
  `}

  ${media.lessThan("400px")`
    margin: 0;
  `}
`;

export const HeaderIcon = styled.div`
  margin: 0 0.5rem 0.2rem 0;
  width: 1.5rem;
  height: 1.5rem;

  ${media.lessThan("1000px")`
    width: 1.4rem;
    height: 1.4rem;
  `}

  ${media.lessThan("700px")`
    margin: 0 .2rem 0.2rem;
  `}
`;

export const HeaderLabel = styled.span`
  font-size: 1.1rem;

  ${media.lessThan("1000px")`
    font-size: 1rem;
  `}

  ${media.lessThan("800px")`
    font-size: .9rem;
  `}

  ${media.lessThan("700px")`
    display: none;
  `}
`;
