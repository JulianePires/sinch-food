import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --sucess: #93FF6D;
  --error: #940909;
  --info: #11709E;
  --danger: #FF9F37;
  --main: ${(props) => props.theme.main};
  --contrastText: ${(props) => props.theme.contrastText};
  --details: ${(props) => props.theme.details};
  --hover: ${(props) => props.theme.hover};  
  --hoverBackground: ${(props) => props.theme.hoverBackground}; 
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html{
   
    
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    height: 100vh;
    background: var(--main);
    color: var(--contrastText);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3{
    font-weight: 400;
  }

  button { 
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--main);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      color: var(--hover);
    }
  }


`;
