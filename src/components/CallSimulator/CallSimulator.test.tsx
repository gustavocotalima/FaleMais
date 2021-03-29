import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { CallSimulator } from '../CallSimulator';

test('Renders the call simulation form. Should be in the document the Origin and Destination DDD, and the plans container, the calltime range and the submit button', async () => {
  render(<CallSimulator />);

  const OriginDDDs = await screen.findByTestId('OriginDDDs');
  expect(OriginDDDs).toBeInTheDocument();
  
  const DestinationDDDs = await screen.findByTestId('DestinationDDDs');
  expect(DestinationDDDs).toBeInTheDocument();

  const Plans = await screen.findByTestId('Plans');
  expect(Plans).toBeInTheDocument();

  const CallTime = await screen.findByTestId('CallTime');
  expect(CallTime).toBeInTheDocument();

  const CalcButton = await screen.findByTestId('CalcButton');
  expect(CalcButton).toBeInTheDocument();

});
