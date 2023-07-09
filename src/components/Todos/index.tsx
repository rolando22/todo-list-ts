import { Todo } from '../';

import type { TodoList, TodoTypeId } from '../../types.d.ts';

interface Props {
    todos: TodoList,
    onRemoveTodo: ({ id }: TodoTypeId) => void,
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return (
        <section>
            <ul className='todo-list'>
                {todos.map(todo => 
                    <li 
                        key={todo.id}
                        className={`${todo.completed ? 'completed' : ''}`}
                    >
                        <Todo 
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onRemoveTodo={onRemoveTodo}
                        />
                    </li>
                )}
            </ul>
        </section>
    );
};
