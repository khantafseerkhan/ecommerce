import { Grid } from "@mui/material";
import CartList from "./CartList";


const Cart=()=>{
    return(
       <Grid xs={12} container spacing={2}>
            <Grid item xs={8}>
                <CartList />
            </Grid>

            <Grid item xs={4}>
                <div>
                    Total Summary
                </div>
            </Grid>
       </Grid>
    )
}
export default Cart;