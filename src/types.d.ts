interface Todo {
    id: string,
    title: string,
    completed: boolean,
}

export type TodoTypeId = Pick<Todo, 'id'>;
export type TodoTypeTitle = Pick<Todo, 'title'>;
export type TodoTypeCompleted = Pick<Todo, 'completed'>;

export type TodoList = Todo[];
