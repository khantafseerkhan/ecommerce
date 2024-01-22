import { Checkbox } from "@mui/material";

const Filters = ({ selectedFilteredList, categories, handleFilters }) => {
  
  return (
    <div className="filters-list-container">
      <ul>
        {categories.map((element) => {
          return (
            <li>
              <Checkbox
                id={element}
                checked={selectedFilteredList.includes(element)}
                onChange={(e) => handleFilters(e.target.checked, element)}
              />
              <span>{element}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
