import { useState } from "react";

import { type TodoTypeTitle } from "../../types";

interface Props {
    onAddTodo: ({ title }: TodoTypeTitle) => void,
}

export const FormCreateTodo: React.FC<Props> = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handlerOnChangeSetTodoTitle = (event: React.ChangeEvent<HTMLInputElement>): void => 
        setTodoTitle(event.target.value);

    const handlerOnSubmitFormAddTodo = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (todoTitle === '') return;
        onAddTodo({ title: todoTitle });
        setTodoTitle('');
    }

    return (
        <form onSubmit={handlerOnSubmitFormAddTodo}>
            <input 
                className='new-todo'
                type='text' 
                value={todoTitle}
                onChange={handlerOnChangeSetTodoTitle}
                placeholder='¿Qué deseas hacer?'
            />
        </form>
    );
};
