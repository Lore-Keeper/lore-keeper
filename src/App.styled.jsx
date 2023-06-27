import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* styles for css reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    outline: none;
    border-radius: ${props => props.theme.inputBorderRadius}px;
  }
  
  @-webkit-keyframes autofill {
    0%,100% {
        color: ${props => props.theme.grey};
        background: transparent;
    }
}
input:-webkit-autofill {
    animation-delay: 1s; 
    animation-name: autofill;
    animation-fill-mode: both;
}
button { 
  appearance: none;
  font-weight: unset;
}

  * {
  -webkit-overflow-scrolling: touch;
}

body {
  height: 100vh;
  overflow: auto;
  position: relative;
  overscroll-behavior: contain;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${props => props.theme.bodyTextFont}, sans-serif !important;
  font-size: 14px !important;
  line-height: 20px !important; 
  font-weight: normal !important;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  margin-top: 0;
}

.Scrollbars {
  overscroll-behavior: contain !important;
  -webkit-overflow-scrolling: auto !important;
}

a {
  color: ${props => props.theme.linkColour};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

::-webkit-scrollbar {
  width: ${props => props.theme.scrollbarWidth}px;
  height: ${props => props.theme.scrollbarWidth}px;
}

::-webkit-scrollbar-track {
  background: ${(props => props.theme.dgrey, 0.5)}
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${props => props.theme.dgrey};
  &:hover {
    background: ${(props => props.theme.secondary, 0.5)};
  }
}

#root {
  height: 100%;
}
`;

export const AppWrapper = styled.div`
  overflow: hidden;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: ${props => props.theme.spacer}px;
    height: ${props => props.theme.spacer}px;
  }
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
`;
