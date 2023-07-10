import { FILTERS_BUTTONS } from "../../const";
import { FilterValue } from "../../types";

interface Props {
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue) => void,
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

    // const handleOnClickFilter = (event: React.ChangeEvent<HTMLInputElement>, key: FilterValue) => () => {};

    return (
        <ul className='filters'>
            {Object.entries(FILTERS_BUTTONS).map(([key, {literal, href}]) => {
                const isSelected = key === filterSelected;
                const classSelected = isSelected ? 'selected' : '';

                return (
                    <li key={key}>
                        <a 
                            className={classSelected} 
                            href={href}
                            onClick={(event) => {
                                event.preventDefault();
                                onFilterChange(key as FilterValue);
                            }}
                        >
                            {literal}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
