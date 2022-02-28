import React from "react";
import ItemList from "../components/ItemList/ItemList";
import Header from "../components/Header/Header";
import ItemDetail from "../components/ItemDetail/ItemDetail";
function Home() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <ItemList />

    </div>
  );
}

export default Home;
