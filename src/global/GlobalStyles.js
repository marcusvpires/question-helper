import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.069rem;
    font-size: 1rem;
    color: var(--primary);
  }
  input {
    outline: none;
    border: none;
    padding: 0.5rem;
    background-color: transparent;
    font-size: 1rem;
    color: var(--primary);
  }
  input:focus {
    outline: none;
    border: none;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  textarea {
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  // ==============================  Class Name  ============================== //

  .root {
    overflow: hidden;
  }

  .QuestionWrapper {
    width: 100%;
    border: 1px solid  ${props => props.marker ? `var(--${props.marker})` : '#6f757a'};
    padding-left: 1rem;
    border-radius: 5px;
    background-color: ${props => props.marker ? `var(--${props.marker})` : 'var(--blueDark)'};
    cursor: pointer;
    margin: .8rem 0;
    ${media.lessThan("400px")`
    padding-left: .8rem;
    `}
  }

  .RepositoryWrapper {
    width: 100%;
    margin-bottom: .8rem;
  }

  .copyTextarea {
    position: absolute;
    top: -99;
    left: -99;
    width: 1rem;
    height: 1rem;
  }

  .screen {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
  }

  // ==============================  Color theme  ============================== //

  body {
    --backDark: #090c10;
    --back: #0d1117;
    --primary: #c9d1d9;
    --secondary: #a8acaf;
    --third: #6f757a;
    --blueDark: #051d4d;
    --blue: #0d3584;
    --black: #020405;
    --correct: #065011;
    --correctIcon: #08ad21;
    --erro: #850909;
    --erroIcon: #d81a11;
    --marker: #6e40c9;
    --markerIcon: #8957e5;
  }

`

export default GlobalStyles