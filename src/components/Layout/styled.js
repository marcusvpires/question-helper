import styled from "styled-components"
import media from "styled-media-query"


export const LayoutWrapper = styled.div`
`

export const LayoutMain = styled.main`
  height: calc(100vh - 5rem);
  width: calc(100% - 12.5rem);
  position: absolute;
  top: 5rem;
  left: 12.5rem;
  background-color: var(--backDark);
  display: flex;
  ${media.lessThan("large")`
    left: 3.8rem;
    width: calc(100% - 3.8rem);
  `}
  ${media.lessThan("400px")`
    top: 4.4rem;
    height: 100vh;
    left: 0;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;
  `}
`