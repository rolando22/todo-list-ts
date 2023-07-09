import React from "react";
import { Todo as TodoType, TodoTypeId } from "../../types";

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoTypeId) => void,
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void,
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {

    const handleOnClickRemove = ({ id }: TodoTypeId) => () => onRemoveTodo({ id });
    const handleOnChangeToggleComplete = (event: React.ChangeEvent<HTMLInputElement>) => 
        onToggleCompleteTodo({ id, completed: event.target.checked });

    return (
        <div className='view'>
            <input 
                className='toggle'
                type='checkbox' 
                checked={completed}
                onChange={handleOnChangeToggleComplete}
                />
            <label>{title}</label>
            <button 
                className='destroy'
                onClick={handleOnClickRemove({ id })}
            ></button>
        </div>
    );
};
