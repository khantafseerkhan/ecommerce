import { Grid } from "@mui/material";
import CartList from "./CartList";
import CartTotalSummary from "./CartTotalSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const ShowCart = () => {
    if (cartDetails.lineItems.length == 0)
      return (
        <Grid item xs={12}>
          <div className="custom-container shadow message-constainer">
            <p>
              You don't have items in to cart{" "}
              <Link to={"/"}>
                <span className="anchorTag">Click here</span>
              </Link>
              for continue shopping
            </p>
          </div>
        </Grid>
      );
    else
      return (
        <>
          <Grid item sx={{ m: 1 }} lg={7} md={7} sm={12} xs={12}>
            <CartList />
          </Grid>

          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{ m: 1 }}
            className="custom-container shadow"
          >
            <CartTotalSummary cartDetails={cartDetails} />
          </Grid>
        </>
      );
  };
  return (
    <>
      <Grid xs={12} container spacing={2}>
        <ShowCart />
      </Grid>
    </>
  );
};
export default Cart;
