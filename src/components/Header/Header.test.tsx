import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Header } from '../Header';

test('Renders the header. Should be in the document Tilzer and FaleMais logos', async () => {
  render(<Header />);
  
  const TilzerLogo = await screen.findByTestId('TilzerLogo');
  expect(TilzerLogo).toBeInTheDocument();
  
  const FaleMaisLogo = await screen.findByTestId('FaleMaisLogo');
  expect(FaleMaisLogo).toBeInTheDocument();

});
