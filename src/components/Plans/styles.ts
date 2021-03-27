import styled from 'styled-components'

export const Container = styled.div`
    background: var(--orange);
    padding: 1rem;
    display: flex;
    flex-direction:column;
    align-items: center;

    h1 { 
        color: var(--text-gray);
    }
`

export const Carousel = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`