import { DeleteTwoTone } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateToCart,
} from "../../../store-management/reducers/cartReducer";

const CartList = () => {
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const [bulkQuantities, setBulkQuantities] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartDetails.lineItems.length > 0) {
      let obj = {};
      cartDetails.lineItems.forEach((element) => {
        obj["quantity" + element.id] = element.quantity;
      });
      setBulkQuantities(obj);
    }
  }, []);

  const handleRemoveItem = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleUpdateItem = (element, index, quantity) => {
    let tempbulkQuantities = JSON.parse(JSON.stringify(bulkQuantities));


    tempbulkQuantities = {
      ...tempbulkQuantities,
      ["quantity" + element.id]:quantity,
    };
    setBulkQuantities(tempbulkQuantities);
    

    let tempCartDetails = JSON.parse(JSON.stringify(cartDetails));
    tempCartDetails.lineItems[index].quantity =
      tempbulkQuantities["quantity" + element.id];
    dispatch(updateToCart(tempCartDetails.lineItems[index]));
  };
  return (
    <>
      {cartDetails.lineItems.length > 0 && (
        <div>
          <Grid
            container
            xs={12}
            spacing={2}
            className={"custom-container shadow"}
          >
            <Grid item xs={12} spacing={2}>
              {cartDetails.lineItems.map((element, index) => {
                return (
                  <Grid container sx={{ mb: 1 }} className="cart-list">
                    <Grid item xs={3}>
                      <img src={element.image} className="cart-list-img" />
                    </Grid>
                    <Grid item xs={9} className="cart-list-content">
                      <div className="product-title">{element.title}</div>
                      <div className="product-pricing">$ {element.price}</div>
                    </Grid>

                    <Grid item xs={12} className="cart-list-footer">
                      <div className="cart-list-action-container">
                        <div className={"quantity-container"}>
                          <div
                            className="quatity-button"
                            onClick={() =>
                              bulkQuantities["quantity" + element.id] > 1
                                ? handleUpdateItem(element, index, (bulkQuantities["quantity" + element.id]-1))
                                : ""
                            }
                          >
                            -
                          </div>

                          <div className="quantity-input">
                            <input
                              type="number"
                              value={bulkQuantities["quantity" + element.id]}
                              onChange={(e)=>{
                                setBulkQuantities(
                                  {...bulkQuantities,["quantity" + element.id]:parseInt(e.target.value)}
                                  );
                                  handleUpdateItem(element, index, parseInt(e.target.value))
                              
                              }}

                            />
                          </div>
                          <div
                            className="quatity-button"
                            onClick={() =>
                              handleUpdateItem(element, index, (bulkQuantities["quantity" + element.id]+1))
                            }
                          >
                            +
                          </div>
                        </div>
                        <div
                          className="removebutton"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <DeleteTwoTone /> <span>Remove</span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default CartList;
