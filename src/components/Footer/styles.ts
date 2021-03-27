import styled from 'styled-components'

export const Container = styled.footer`
    background: var(--orange);
    padding: 1rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    img { 
        height: 1.5rem;
        width: auto;
    }

    p {
        margin-top:0.5rem;
        color: var(--text-gray);
    }
`