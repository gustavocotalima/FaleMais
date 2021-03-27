import styled from 'styled-components'
import Slider from '@material-ui/core/Slider';

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 2rem auto;;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
`

export const Simulator = styled.div`
    max-width: 600px;
    width: 100%;
    background: var(--card-background);
    border-radius: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    
    form {
        max-width: 600px;
        width: 100%;
        padding: 1.25rem; 
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`
interface ButtonProps {
    isSelected? : boolean;
}

export const Button = styled.button<ButtonProps>`
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    color: var(--text-button);
    background: var(--orange);
    border: ${(props) => props.isSelected ? "1px solid #000000" : '0'};
    filter: ${(props) => props.isSelected ? "brightness(1.2)":"brightness(1)"};
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2.5rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    &:disabled {
        background: transparent;
        border: 1px solid var(--input-border);
        color: var(--input-text);
    }
`

export const DDDsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    
    @media (max-width: 370px) {
        grid-template-columns: 1fr;
    }
`

export const PlanContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;

    img {
        height: 2rem;
        width: auto;
        filter: invert(1);
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`

export const TimeRange = styled(Slider)`
    &>.MuiSlider-track, .MuiSlider-rail {
        color: #EB8526;
        height: 4px;
        border-radius: 1rem;
    }
    &>.MuiSlider-thumb {
        color: #EB8526;
        height: 14px;
        width: 14px;
    }
`

export const ResultContainer = styled.div`
        max-width: 600px;
        width: 100%;
        padding: 0 1.25rem 1.25rem 1.25rem; 
        display: grid;
        grid-template-columns: 1fr 1fr;  
        gap: 0.75rem; 

        @media (max-width: 350px) {
            grid-template-columns: 1fr;
        }

        div {
            display: flex;
            padding: 1.25rem;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            background: var(--result-background);
            border-radius: 0.5rem;

            h1 {
                padding: 1.25rem 0 0 0;
                &.red {
                    color: red;
                }
                &.green {
                    color: green;
                }
            }
        }
`

