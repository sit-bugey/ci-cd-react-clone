import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Composant App', () => {
  test('affiche le titre "Vite + React"', () => {
    render(<App />);
    // On recherche un élément de type heading avec le texte "Vite + React"
    const heading = screen.getByRole('heading', { name: /Vite \+ React/i });
    expect(heading).toBeInTheDocument();
  });

  test('incrémente le compteur lors d\'un clic sur le bouton', () => {
    render(<App />);
    // On recherche le bouton initialement affichant "count is 0"
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    // On simule un clic sur le bouton
    fireEvent.click(button);

    // Après le clic, on s'attend à ce que le bouton affiche "count is 1"
    expect(button).toHaveTextContent(/count is 1/i);
  });
});
