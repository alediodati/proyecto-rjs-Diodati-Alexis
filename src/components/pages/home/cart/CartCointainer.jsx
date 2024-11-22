import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contex/cartContext";
import "./cartCointainer.css";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div className="cart-container">
      {cart.map((product) => {
        return (
          <div className="cart-item" key={product.id}>
            <h2>{product.title}</h2>
            <h3>Cantidad: {product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <button className="reset-cart-button" onClick={resetCart}>
          Vaciar carrito
        </button>
      )}

      <h2 className={`cart-total ${cart.length > 0 ? "red" : "blue"}`}>
        El total a pagar es {totalEnElCarrito}
      </h2>

      <Link to="/checkout">
        <button className="checkout-button">Finalizar compra</button>
      </Link>
    </div>
  );
};

export default CartContainer;
