import { Todos } from './components/';

const mockTodos = [
    {
        id: '0', 
        title: 'Title 1',
        completed: true,
    },
    {
        id: '1', 
        title: 'Title 2',
        completed: false,
    },
    {
        id: '2', 
        title: 'Title 3',
        completed: false,
    },
];

export const App = (): JSX.Element => {
    return (
        <main className='todoapp'>
            <Todos todos={mockTodos} />
        </main>
    );
}
