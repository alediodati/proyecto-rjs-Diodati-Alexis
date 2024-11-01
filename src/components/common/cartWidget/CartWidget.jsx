import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <FaShoppingCart />
      <span>5</span>
    </Link>
  );
};

export default CartWidget;
