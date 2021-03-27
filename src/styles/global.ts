import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FEFEFE;
        --orange: #EB8526;
        --card-background: #EFEFEF;
        --result-background: #DEDEDE;
        --input-border: #D7D7D7;
        --input-text: #757575;
        --text-gray: #FEFEFE;
        --text-button: #FEFEFE;
    }
    
    * {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.50%;
        }
    }

    body {
        background:  var(--background);
        -webkit-font-smoothing: antialiased;
    }

    input, p, label {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    body, textarea, h1, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`