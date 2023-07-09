import { useState } from 'react';

import { Todos } from './components/';
import { TodoTypeId } from './types';

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

    return (
        <main className='todoapp'>
            <Todos 
                todos={todos} 
                onRemoveTodo={onRemoveTodo}
            />
        </main>
    );
}
