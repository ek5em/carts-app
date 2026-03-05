import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, css } from '@emotion/react';
import App from './App';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: #f8fafc;
    color: #1e293b;
    line-height: 1.5;
  }

  button {
    font-family: inherit;
  }

  input,
  select {
    font-family: inherit;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
);
