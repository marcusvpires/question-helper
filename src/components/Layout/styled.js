import styled from "styled-components"
import media from "styled-media-query"


export const LayoutWrapper = styled.div`
  background-color: var(--backDark);
  display: flex;
  flex-wrap: wrap;
`

export const LayoutMain = styled.main`
  background-color: var(--backDark);
  height: calc(100vh - 4.8rem);
  width: calc(100% - 12.5rem);
  display: flex;

  ${media.lessThan("1000px")`
    height: calc(100vh - 4.7rem);
    width: calc(100% - 3.8rem);
  `}

  ${media.lessThan("800px")`
    height: calc(100vh - 4.2rem);
  `}

  ${media.lessThan("700px")`
    height: calc(100vh - 4rem);
    flex-wrap: wrap;
    min-height: calc(100vh - 4.8rem);
    width: 100%;
    height: 100%;
    padding: 4.2rem 1.9rem 5rem 5.4rem;
  `}
  
  ${media.lessThan("600px")`
    min-height: calc(100vh - 4rem - 3.5rem);
    width: 100%;
    height: auto;
  `}

`