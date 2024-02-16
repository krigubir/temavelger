import { render, screen } from '@testing-library/react';

import { Tag } from './Tag';

describe('Tag', () => {
  describe('Tag Default Render', () => {
    test('should render tag with Beta as value', (): void => {
      render(<Tag>Beta</Tag>);
      expect(screen.getByText('Beta'));
    });

    test('should render medium as default size', () => {
      render(<Tag>Beta</Tag>);
      expect(screen.getByText('Beta')).toHaveClass('medium');
    });

    test('should render neutral as default color', (): void => {
      render(<Tag>Beta</Tag>);
      expect(screen.getByText('Beta')).toHaveClass('neutral');
    });
  });

  describe('Tag With Props Provided', () => {
    test('should render tag as small', (): void => {
      render(<Tag size='small'>Beta</Tag>);
      expect(screen.getByText('Beta')).toHaveClass('small');
    });

    test('should render color first', (): void => {
      render(<Tag color='first'>Beta</Tag>);
      expect(screen.getByText('Beta')).toHaveClass('first');
    });

    test('should have custom className', () => {
      render(<Tag className='customClassName'>Beta</Tag>);
      expect(screen.getByText('Beta')).toHaveClass('customClassName');
    });
  });
});
