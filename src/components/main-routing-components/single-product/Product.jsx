import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  updateToCart,
} from "../../../store-management/reducers/cartReducer";
import { getProductById } from "../../../services/products.service";
import ProductAlert from "../../custom-components/ProductAlert";

const Product = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isItemExist = cartDetails.lineItems.find(
    (element) => element.id.toString() === params.id
  );
  useEffect(() => {
    console.log(cartDetails);
    console.log("isItemExist :: ", isItemExist);
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(params.id);
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Error fetching product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [params.id]);

  useEffect(() => {
    setQuantity(
      isItemExist
        ? cartDetails.lineItems.find(
            (element) => element.id.toString() === params.id
          ).quantity
        : 1
    );
  }, [params.id, cartDetails.lineItems, isItemExist]);

  const handleCartAction = () => {
    const preparedItemDetails = { ...productDetails, quantity };
    const cartAction = isItemExist ? updateToCart : addToCart;
    dispatch(cartAction(preparedItemDetails));
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {productDetails && (
        <Grid container spacing={2} className="custom-container shadow">
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="product-img padding-36">
                  <img
                    src={productDetails.image}
                    alt={productDetails.title}
                    className="single-img"
                  />
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className="centered-content">
                <div className="product-title">{productDetails.title}</div>
                <div className="product-pricing">${productDetails.price}</div>

                <div className="quantity-section">
                  <div className="title mt-18">Quantity</div>

                  <div className="quantity-container mt-18">
                    <div
                      className="quantity-button"
                      onClick={() =>
                        setQuantity((prevQuantity) =>
                          Math.max(1, prevQuantity - 1)
                        )
                      }
                    >
                      -
                    </div>
                    <div className="quantity-input">
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                    </div>
                    <div
                      className="quantity-button"
                      onClick={() =>
                        setQuantity((prevQuantity) => prevQuantity + 1)
                      }
                    >
                      +
                    </div>
                  </div>
                </div>

                <div className="mt-18">
                  <Button
                    variant="primary"
                    className="product-footer-button"
                    onClick={handleCartAction}
                  >
                    {isItemExist ? "Update to cart" : "Add to cart"}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <p className="para">
              <div className="para-title mb-18">Description</div>
              {productDetails.description}
            </p>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Product;
