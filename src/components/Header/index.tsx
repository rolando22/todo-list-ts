import { FormCreateTodo } from "../";

import { type TodoTypeTitle } from "../../types";

import './Header.css';

interface Props {
    onAddTodo: ({ title }: TodoTypeTitle) => void,
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className='header'>
            <h1>
                Todo
                <img 
                    className='header-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' 
                    alt='Logo TypeScript' 
                />
            </h1>
            <FormCreateTodo onAddTodo={onAddTodo} />
        </header>
    );
};
