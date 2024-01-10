import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ProductCart = ({
    title,
    price,
    category,
    descrption,
    id,
    img,
    rating

}) => {
    const navigate=useNavigate()
    return (
        <div className="product-widget"        
    onClick={()=>navigate(`/product/${id}`)}
        >
            <div className="product-img"><img src={img}/></div>
            <div className="product-title">{title}</div>
            <div className="product-rating">{rating?.count}</div>
            <div className="product-pricing">{price}</div>
            {/* <div className="product-footer">
                <Button variant="primary" 
                className={"product-footer-button"}
                >
                    Add to cart
                    </Button>
            </div> */}
        </div>
    )
}

export default ProductCart;