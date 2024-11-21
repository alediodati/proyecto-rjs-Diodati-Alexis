import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../../../contex/cartContext";
import { toast } from "sonner";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  let totalInCart = getTotalQuantity(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    const isValid = addToCart(objeto);
    if (isValid) {
      toast.success("Producto agregado correctamente", {
        position: "bottom-right",
        closeButton: true,
      });
    } else {
      toast.error("ERROR", {
        position: "bottom-right",
        closeButton: true,
      });
    }
  };

  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;
