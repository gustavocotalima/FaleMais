import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Footer } from '../Footer';

test('Renders the footer. Should be in the document Tilzer logo', async () => {
  render(<Footer />);
  
  const TilzerLogo = await screen.findByTestId('TilzerLogo');
  expect(TilzerLogo).toBeInTheDocument();

});
