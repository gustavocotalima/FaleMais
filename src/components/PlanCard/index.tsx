import { Container } from "./styles";

interface PlanProps {
    description: string;
    logo: string;
    name: string;
}

export function PlanCard({description, logo, name}: PlanProps){
    return (
        <Container>
            <header>
                <p>{description}</p>
            </header>
            <div>
                <img src={logo} alt={name}></img>
            </div>
            <div>
                <button type="submit">Confira</button>
            </div>
            
        </Container>
    )
}