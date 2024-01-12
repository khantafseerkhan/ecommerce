import { Grid } from "@mui/material";
import CartList from "./CartList";
import CartTotalSummary from "./CartTotalSummary";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const navigate = useNavigate();
  return (
    <>
      {cartDetails.lineItems.length > 0 ? (
        <Grid xs={12} container spacing={2}>
          <Grid item xs={8}>
            <CartList />
          </Grid>

          <Grid item xs={4} className="custom-container shadow">
            <CartTotalSummary cartDetails={cartDetails}/>
          </Grid>
        </Grid>
      ) : (
        <Grid xs={12} container spacing={2}>
          <Grid item xs={12}>
            <div className="custom-container shadow message-constainer">
              <p>
                You don't have items in to cart{" "}
                <Link to={"/"}>
                <span className="anchorTag" >
                  Click here
                </span>
                </Link>
              
                for continue shopping
              </p>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default Cart;
