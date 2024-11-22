import Counter from "../../../common/counter/Counter";
import "./itemDetail.css";

const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <div className="item-detail-container">
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt={item.title} />

      <div className="counter-container">
        <Counter
          stock={item.stock}
          agregarAlCarrito={agregarAlCarrito}
          totalInCart={totalInCart}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
