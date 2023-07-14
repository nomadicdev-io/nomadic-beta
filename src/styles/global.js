import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --font-size: 16px;
        --primary-color: #48B869;
        --secondary-color: rgb(72 184 105 / 25%);
        --third-color: rgba(255, 68, 79, 0.5);
        --text-color: #282828;
        --background-color: #fff;
        --white-color: #fff;
        --box-shadow: 0 1px 0.5rem rgba(14, 14, 14, 0.1);
        --border-color-light: rgba(54, 54, 54, 0.08);
        --border-color-medium: rgba(218, 221, 225, 1);
        --grey-color: rgb(230, 230, 230);
        --grey-color-2: rgb(215, 215, 215);
        --red-color: #ff5454;
    }

    html{
        box-sizing: border-box;
        font-size: var(--font-size);
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        font-size: 1rem;
        font-size: 100%;
        font-weight: 400;
        line-height: 1.5;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 0;
        margin: 0;
        word-wrap: break-word;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 700;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a{
        transition: all 0.3s ease-out;
        color: var(--primary-color);
        text-decoration: none;
    }
`;