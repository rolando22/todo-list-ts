import { useState } from 'react';

import { Todos } from './components/';
import { Todo as TodoType, TodoTypeCompleted, TodoTypeId } from './types';

const mockTodos = [
    {
        id: '0', 
        title: 'Title 1',
        completed: true,
    },
    {
        id: '1', 
        title: 'Title 2',
        completed: false,
    },
    {
        id: '2', 
        title: 'Title 3',
        completed: false,
    },
];

export const App = (): JSX.Element => {
    const [todos, setTodos] = useState(mockTodos);

    const onRemoveTodo = ({ id }: TodoTypeId) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const onToggleCompleteTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) return { ...todo, completed };
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <main className='todoapp'>
            <Todos 
                todos={todos} 
                onRemoveTodo={onRemoveTodo}
                onToggleCompleteTodo={onToggleCompleteTodo}
            />
        </main>
    );
}
