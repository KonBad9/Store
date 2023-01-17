import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Witamy w naszym sklepie !!!</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Koszyk{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <button onClick={() => alert("Zalogowano !")}>Zaloguj się !</button>
      </div>
    </header>
  );
}
