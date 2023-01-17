import Header from "@/Header";
import Main from "@/Main";
import Basket from "@/Basket";
import dataFlowers from "@/data/dataFlowers";
import { useState } from "react";
import Link from "next/link";

function Car() {
  const { products } = dataFlowers;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
      <Link href={"/"} className="link">Wróć do strony startowej</Link>
      <hr/>
      <Link href={"/Computer"} className="link">Idź do >>> Komputery</Link>
      <hr/>
      <Link href={"/Car"} className="link">Idź do >>> Samochody</Link>
    </div>
  );
}

export default Car;
