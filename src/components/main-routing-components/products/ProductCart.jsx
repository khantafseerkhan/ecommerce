import { useNavigate } from "react-router-dom";

const ProductCart = ({
  title,
  price,
  category,
  descrption,
  id,
  img,
  rating,
}) => {
  const navigate = useNavigate();
  return (
    <div className="product-widget" onClick={() => navigate(`/product/${id}`)}>
      <div className="product-img">
        <img src={img} />
      </div>
      <div className="product-title">{title}</div>
      <div className="product-pricing">$ {price}</div>
    
    </div>
  );
};

export default ProductCart;
