import { createGlobalStyle } from "styled-components";
import "@fontsource/jua";
import "@fontsource/sora";

const GlobalStyles = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
}

body {
 font-family: 'Sora', sans-serif;
 background: #fff;
}

a {
 color: inherit;
 text-decoration: none;
}

`;

export default GlobalStyles;