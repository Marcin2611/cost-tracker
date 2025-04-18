import { render } from '@testing-library/react';

import Titlebar from './Titlebar';

describe('Titlebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Titlebar />);
    expect(baseElement).toBeTruthy();
  });
});
