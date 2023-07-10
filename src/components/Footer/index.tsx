import { Filters } from '../';

import type { FilterValue } from '../../types';

interface Props {
    activeCount: number,
    completedCount: number,
    filterSelected: FilterValue,
    onClearCompleted: () => void,
    onFilterChange: (filter: FilterValue) => void,
}

export const Footer: React.FC<Props> = (
    { activeCount, completedCount, filterSelected, onClearCompleted, onFilterChange }
) => {

    const handleOnClickClearCompleted = () => onClearCompleted();

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters 
                filterSelected={filterSelected} 
                onFilterChange={onFilterChange}
            />
            {completedCount > 0 && (
                <button
                    className='clear-completed'
                    onClick={handleOnClickClearCompleted}
                >
                    Borrar completadas
                </button>
            )}
        </footer>
    );
};
