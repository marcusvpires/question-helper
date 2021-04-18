import styled from "styled-components"

export const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 12;
  position: absolute;
  padding: 8vh 1.5rem;
`

export const Container = styled.div`
  background-color: #051b41de;
  height: auto;
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
`

export const Title = styled.h3`
  margin: 4vh 0;
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;;
`

export const Text = styled.p`
  font-size: 0.8rem;
  margin: 2vh 0;
  font-weight: 600;
  text-align: justify;
  hyphens: auto;
`

export const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 4vh 0 2vh;
`

export const Strong = styled.span`
  font-weight: 800;
`