import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  body {
    font-family: 'Plus Jakarta Sans';
    background: ${({ theme }) => theme.colors.bg.darkPrimary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  input, textarea, button {
    outline: none;
    /* To refactor: */
    font-family: 'Plus Jakarta Sans';
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
