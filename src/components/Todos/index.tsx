import { Todo } from '../';

import type { Todo as TodoType, TodoList, TodoTypeId } from '../../types.d.ts';

interface Props {
    todos: TodoList,
    onRemoveTodo: ({ id }: TodoTypeId) => void,
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void,
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
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
                            onToggleCompleteTodo={onToggleCompleteTodo}
                        />
                    </li>
                )}
            </ul>
        </section>
    );
};
