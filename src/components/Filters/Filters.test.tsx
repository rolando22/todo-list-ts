import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Filters } from '.';

describe('<Filters />', () => { 
  const onFilterChangeMock = vi.fn();

  beforeEach(() => { 
    render(<Filters filterSelected='all' onFilterChange={onFilterChangeMock} />)
  });

  afterEach(() => { 
    cleanup();
  });

  it('Should be render Filters component', () => { 
    const links: HTMLAnchorElement[] = screen.getAllByRole('link');

    expect(links[0].text).toBe('Todos');
    expect(links[1].text).toBe('Activos');
    expect(links[2].text).toBe('Completados');
  });

  it("Should be called onFilterChange on click", () => {
    const link: HTMLAnchorElement = screen.getByText('Todos');

    act(() => {
      fireEvent.click(link);
    });

    expect(onFilterChangeMock).toHaveBeenCalledTimes(1);
  });
});
