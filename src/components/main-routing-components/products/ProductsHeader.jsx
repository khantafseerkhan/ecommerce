import { Search } from "@mui/icons-material"
import { Grid, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"

const ProductsHeader=()=>{
    const [search,setSearch]=useState("")
    return(
        <Grid container>
          <Grid item xs={12}>
            <div className="header-section">
              <div className="left-section">Products</div>
              <div className="right-section">
                <TextField
                  placeholder={"Search Product By Title ..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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