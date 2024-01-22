import { Search } from "@mui/icons-material"
import { Grid, InputAdornment, TextField } from "@mui/material"

const ProductsHeader=({handleSearch})=>{
    return(
        <Grid container>
          <Grid item xs={12}>
            <div className="header-section">
              <div className="left-section">Products</div>
              <div className="right-section">
                <TextField
                  placeholder={"Search Product By Title ..."}
                  onChange={(e) => handleSearch(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
    )
}
export default ProductsHeader;