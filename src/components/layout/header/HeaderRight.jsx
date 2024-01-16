import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HeaderRight = () => {
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const navigate = useNavigate();
  return (
    <div className="header-right-section">
      <ul>
        <li onClick={() => navigate("/cart")}>
          <Badge badgeContent={cartDetails?.totalItems} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </li>
        <li>
          <AccountCircleRoundedIcon />
        </li>
      </ul>
    </div>
  );
};

export default HeaderRight;
