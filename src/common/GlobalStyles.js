import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: Open-Sans, Helvetica, Fira Sans, Segoe UI, Roboto, Sans-Serif;
        color: ${({ theme }) => theme.primaryText};
        background: ${({ theme }) => theme.body};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        --main-color: #504CCA;
    }
`;

export default GlobalStyle;
