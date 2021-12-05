import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        color: ${({ theme }) => theme.primaryText};
        background: ${({ theme }) => theme.body};
    }

    :root {
        --main-color: #504CCA;
    }
`;

export default GlobalStyle;
