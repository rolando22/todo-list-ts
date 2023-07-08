import React from "react";

interface Props {
    id: string,
    title: string,
    completed: boolean,
}

export const Todo: React.FC<Props> = ({ id, title, completed}) => {
    return (
        <div>
            <input type='checkbox' />
            <label>{title}</label>
            <button>X</button>
        </div>
    );
};
