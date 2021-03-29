import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Plans } from '../Plans';
 
test('Renders the plans cards. Should be in the document a container with the plans cards', async () => {
    render(<Plans />);

    const PlansContainer = await screen.findByTestId('PlansContainer');
    expect(PlansContainer).toBeInTheDocument();
});
