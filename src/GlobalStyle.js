import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    h1{
      font-size: 1.6rem;
    }
    p{
      font-size: 1.2rem;
    }
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  @media (min-width: 768px){
    h1{
      font-size: 1.9rem;
    }
    p{
      font-size: 1.4rem;
    }
  }
`;

export default GlobalStyle; 