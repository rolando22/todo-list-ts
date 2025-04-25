import { describe, it, expect, beforeEach, vi, afterEach, Mock } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Footer } from '.';
import { FilterValue } from '../../types';

const onClearCompletedMock = vi.fn();
const onFilterChangeMock = vi.fn();

describe('<Footer />', () => { 
  let props: {
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue;
    onClearCompleted: Mock;
    onFilterChange: Mock;
  };

  beforeEach(() => {
    props = {
      activeCount: 2,
      completedCount: 2,
      filterSelected: 'all',
      onClearCompleted: onClearCompletedMock,
      onFilterChange: onFilterChangeMock,
    };

    render(<Footer {...props} />);
  });

  afterEach(() => { 
    cleanup();
  });

  it('Should be render Footer component', () => { 
    const footer = screen.getByRole('contentinfo');
    const activeCount = screen.getByText((content, element) => 
      element?.tagName.toLowerCase() === 'strong' &&
      content.trim() === '2' &&
      element.nextSibling?.textContent?.trim() === 'tareas pendientes'
    );

    expect(footer).toBeInTheDocument();
    expect(activeCount).toBeInTheDocument();
  });

  it('Should be render ClearClompleted button if completedCount is greater than 0', () => { 
    props.completedCount = 2;
    
    cleanup();
    render(<Footer {...props} />);
    
    const button = screen.getByText('Borrar completadas');

    expect(button).toBeInTheDocument();
  });

  it('Should not render ClearClompleted button if completedCount is 0', () => { 
    props.completedCount = 0;
    
    cleanup();
    render(<Footer {...props} />);

    const button = screen.queryByText('Borrar completadas');

    expect(button).not.toBeInTheDocument();
  });

  it('Should be called onClearCompletedMock on click', () => {
    props.completedCount = 2;
    
    cleanup();
    render(<Footer {...props} />);

    const button = screen.getByText('Borrar completadas');

    act(() => { 
      fireEvent.click(button);
    });

    expect(onClearCompletedMock).toHaveBeenCalledTimes(1);
  })
});
