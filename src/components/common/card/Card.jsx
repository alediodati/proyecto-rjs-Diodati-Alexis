import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card card-header card-body card-footer">
      <img src={image} alt="" style={{ width: "100px" }} />
      <h2>{title}</h2>
      <h3>${price}</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Mas Informacion</button>
      </Link>
    </div>
  );
};

export default Card;
