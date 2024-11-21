import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let docsRef = productsCollection;

    if (name && name != "Todas") {
      docsRef = query(productsCollection, where("category", "==", name));
    }

    getDocs(docsRef)
      .then((res) => {
        const arrayEntendible = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setItems(arrayEntendible);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [name]);
  // const funcionParaAgregar = () => {
  //   const productsCollection = collection(db, "products");

  //   products.forEach((product) => {
  //     addDoc(productsCollection, product);
  //   });
  // };

  return (
    <div>
      <ItemList items={items} />
      {/* <button onClick={funcionParaAgregar}>Cargar products</button> */}
    </div>
  );
};

export default ItemListContainer;
