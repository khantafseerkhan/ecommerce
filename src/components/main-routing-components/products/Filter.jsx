import { Checkbox, Grid } from "@mui/material";

const Filters = ({ selectedFilteredList, categories, handleFilters }) => {
  return (
    <Grid container >
      <Grid item xs={12}>
        <div>
          <div className="header-section">
            <div className="left-section">Filters</div>
            <div className="right-section anchorTag">Clear All</div>
          </div>
        </div>
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
      </Grid>
    </Grid>
  );
};

export default Filters;
