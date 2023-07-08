import { Todo } from '../';

import type { TodoList } from '../../types.d.ts';

interface Props {
    todos: TodoList,
}

export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <section>
            <ul>
                {todos.map(todo => 
                    <li key={todo.id}>
                        <Todo 
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                        />
                    </li>
                )}
            </ul>
        </section>
    );
};
