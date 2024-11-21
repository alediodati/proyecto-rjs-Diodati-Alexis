import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../contex/cartContext";
import Badge from "@mui/material/Badge";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary" showZero>
        <FaShoppingCart size={"22px"} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
