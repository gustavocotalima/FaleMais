import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { PlanCard } from '../PlanCard';

import logoFaleMais30 from '../../assets/LogoFaleMais30.svg';

const plan = {
    id:1,
    name:'FaleMais 30',
    description:'30 Minutos Grátis',
    logo:logoFaleMais30,
    freeTime: 30
}
 
test('Renders the plans cards. Should be in the document a plan description and img, and a button ', async () => {
    render(<PlanCard description={plan.description} logo={plan.logo} name={plan.name}/>);

    const planDescription = await screen.findByText('30 Minutos Grátis');
    expect(planDescription).toBeInTheDocument();

    const planImg = await screen.findByAltText('FaleMais 30');
    expect(planDescription).toBeInTheDocument();

    const button = await screen.findByTestId('PlanCardButton');
    expect (button).toBeInTheDocument();
});
