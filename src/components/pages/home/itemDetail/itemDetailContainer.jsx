import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const { id } = useParams();

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
    console.log(objeto);
  };

  return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
