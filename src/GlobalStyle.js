import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --eerieBlack: #1C2022;
    --oxfordBlue: #001029;
    --aliceBlue: #EBF6FF;
    --redSalsa: #FB3741;
    --blueNCS: #1D84B5;

    --darkGrey: #292929;
    --white: #ffffff;
    --black: #000000;
  }

  *{
    box-sizing: border-box;
  }

  body{
    background-color: var(--oxfordBlue);
    h1{
      color: var(--white)
    }
  }
`;

export default GlobalStyle;
