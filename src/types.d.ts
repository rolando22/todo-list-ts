import { TODO_FILTERS } from "./const";

interface Todo {
    id: string,
    title: string,
    completed: boolean,
}

export type TodoTypeId = Pick<Todo, 'id'>;
export type TodoTypeTitle = Pick<Todo, 'title'>;
export type TodoTypeCompleted = Pick<Todo, 'completed'>;

export type TodoList = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
