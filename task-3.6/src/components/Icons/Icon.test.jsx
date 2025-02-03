import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconImage from './IconImage'; // Путь к компоненту
import { iconList } from "../Icons/IconListImage"

describe('Компонент IconImage', () => {
  it('должен корректно отображать все иконки с правильными аттрибутами', () => {
    iconList.forEach(icon => {
      render(<IconImage src={icon.src} alt={icon.alt} />);
      const img = screen.getByAltText(icon.alt);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', icon.src);
      expect(img).toHaveAttribute('alt', icon.alt);
    });
  });

  it('должен рендерить иконки с размером 32x32', () => {
    iconList.forEach(icon => {
      render(<IconImage src={icon.src} alt={icon.alt} />);
      const img = screen.getByAltText(icon.alt);
      expect(img).toHaveStyle('width: 32px');
      expect(img).toHaveStyle('height: 32px');
    });
  });
});
