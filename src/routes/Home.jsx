import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

function Home(props) {
  return (
    <div>
      <CoinSearch coins={props.coins} />
      <Trending />
    </div>
  );
}

export default Home;
