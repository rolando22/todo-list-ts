import { useState } from 'react';

import { Footer, Header, Todos } from './components/';

import type {  FilterValue } from './types';
import { TODO_FILTERS } from './const';
import { useTodos } from './hooks/useTodos';



export const App = (): JSX.Element => {
    const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL);
    const { 
        todos,
        activeCount,
        completedCount,
        onRemoveTodo,
        onToggleCompleteTodo,
        onClearCompleted,
        onAddTodo 
    } = useTodos();

    const onFilterChange = (filter: FilterValue): void => setFilter(filter);

    const filteredTodos = todos.filter(todo => {
        if (filter === TODO_FILTERS.ACTIVE) return !todo.completed;
        if (filter === TODO_FILTERS.COMPLETED) return todo.completed;
        return todo;
    });

    return (
        <main className='todoapp'>
            <Header 
                onAddTodo={onAddTodo}
            />
            <Todos 
                todos={filteredTodos} 
                onRemoveTodo={onRemoveTodo}
                onToggleCompleteTodo={onToggleCompleteTodo}
            />
            <Footer 
                activeCount={activeCount}
                completedCount={completedCount}
                filterSelected={filter}
                onClearCompleted={onClearCompleted}
                onFilterChange={onFilterChange}
            />
        </main>
    );
}
