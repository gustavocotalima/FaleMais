import styled from 'styled-components'

export const Container = styled.div`
    background: var(--card-background);
    max-width: 300px;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border-radius:1rem;

    img { 
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 1.5rem 0;
    }

    button {
            cursor: pointer;
            width: 100%;
            font-size: 1rem;
            color: var(--text-button);
            background: var(--orange);
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 2.5rem;

            transition: filter 0.2s;
            
            &:hover {
                filter: brightness(0.9);
            }
        }
`