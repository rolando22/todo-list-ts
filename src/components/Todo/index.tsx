import React from "react";
import { Todo as TodoType, TodoTypeId } from "../../types";

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoTypeId) => void,
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {

    const handleOnClickRemove = ({ id }: TodoTypeId) => () => onRemoveTodo({ id });

    return (
        <div className='view'>
            <input 
                className='toggle'
                type='checkbox' 
                checked={completed}
                />
            <label>{title}</label>
            <button 
                className='destroy'
                onClick={handleOnClickRemove({ id })}
            ></button>
        </div>
    );
};
