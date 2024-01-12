import { Button, Grid } from "@mui/material";
import { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  updateToCart,
} from "../../../store-management/reducers/cartReducer";

const Product = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const [isItemExist, setIsItemExist] = useState(false);
  useEffect(() => {
    getProductDetailsById(params.id);
  }, []);

  useEffect(() => {
    let itemDetails = cartDetails.lineItems.find(
      (element) => element.id == params.id
    );
    if (itemDetails) {
      setQuantity(itemDetails.quantity);
      setIsItemExist(true);
    }
  }, [cartDetails]);

  const getProductDetailsById = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  };

  useEffect(() => {


  }, [productDetails]);

  const handleAddToCart = (productDetails) => {
    let preparedItemDetails = { ...productDetails, quantity: quantity };
    dispatch(addToCart(preparedItemDetails));
  };

  const handleUpateCart = (productDetails) => {
    let preparedItemDetails = { ...productDetails, quantity: quantity };
    dispatch(updateToCart(preparedItemDetails));
  };
  return (
    <Grid container  spacing={2} className={"custom-container shadow"}>
      {productDetails && (
        <>
          <Grid item xs={12} spacing={2}>
            <Grid container  spacing={2}>
              <Grid item xs={6} spacing={2}>
                <div className="product-img padding-36">
                  <img src={productDetails.image} className={"single-img"} />
                </div>
              </Grid>
              <Grid item xs={6} spacing={2}>
                <div className="product-title">{productDetails.title}</div>
                <div className="product-pricing">$ {productDetails.price}</div>

                <div className="quantity-section">
                  <div className="title mt-18">Quantity</div>

                  <div className={"quantity-container mt-18"}>
                   
                    
                    <div
                      className="quatity-button"
                      onClick={() =>
                        quantity > 1 ? setQuantity(quantity - 1) : ""
                      }
                    >
                      -
                    </div>
                    <div className="quantity-input" o>
                      <input type="number" value={quantity} />
                    </div>
                    <div
                      className="quatity-button"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </div>
                  </div>
                </div>

                <div className="mt-18">
                  <Button
                    variant="primary"
                    className={"product-footer-button"}
                    onClick={() =>
                      isItemExist
                        ? handleUpateCart(productDetails)
                        : handleAddToCart(productDetails)
                    }
                  >
                    {isItemExist ? "Update to cart" : "Add to cart"}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} spacing={2}>
            <Grid item xs={12} spacing={2}>
              <p className="para">
                <div className="para-title mb-18 ">Descrption</div>
                {productDetails.description}
              </p>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Product;
