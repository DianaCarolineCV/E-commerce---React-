import {
    createGlobalStyle
} from "styled-components";

export const GlobalStyle = createGlobalStyle `

html, body, figure, header, img, div, section, article, input, button, textarea, p, h1, h2, h3, h4, h5, h6, ul, li, a, form {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  
}

input, button {
    cursor: pointer;
    background: transparent;
}
:root {

    --color-grey-1: #333333;
    --color-grey-2: #828282;
    --color-grey-3: #E0E0E0;
    --color-grey-4: #F5F5F5;
    --color-white: #ffffff;
    --color-black: #000000;

    --color-primary: #27AE60;
    --color-primary-2: #93D7AF;
    --color-secundary: #EB5757;

    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-secess: #168821;
    --color-information: #155BCB;

}
`