import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FEFEFE;
        --orange: #EB8526;
        --card-background: #EFEFEF;
        --input-background: #DEDEDE;
        --text: #000000;
        --text-button: #FEFEFE;
        --logo: #FEFEFE
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

    input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    body, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    h1, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;

        font-size: 1rem;
        color: var (--text-button);
        background: var (--orange);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`