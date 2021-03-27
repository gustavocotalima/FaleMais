import { useContext } from 'react';
import { PlanCard } from '../PlanCard';
import { Container, Carousel } from './styles';
import { PlansContext } from '../../PlansContext'


export function Plans(){
    const plans = useContext(PlansContext);

    return(
        <Container>
            <h1>Confira os planos</h1>
            <Carousel>

                {plans.map(plan => (
                    <PlanCard key={plan.id} description={plan.description} logo={plan.logo} name={plan.name}/>
                ))}
                
            </Carousel>
        </Container>
    )
}