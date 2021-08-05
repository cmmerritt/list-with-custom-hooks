import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('displays a list of queens on the home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const ul = await screen.findByRole('list');

    expect(ul).not.toBeEmptyDOMElement();
  });

  it('displays a queen\'s detail page', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');
    await screen.findByText('Tammie Brown');
    await screen.findByAltText('Tammie Brown');
    await screen.findByText('"I can get jiggy, I can get jiggy and wiggy!"');
  });
});
