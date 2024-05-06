import React, { useState } from "react";

import CoinItem from "./CoinItem";

export default function CoinSearch({ coins }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            className="w-full bg--primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              return (
                searchText === "" ||
                value.name.toLowerCase().includes(searchText.toLowerCase())
              );
            })
            .map((coin, index) => (
              <CoinItem coin={coin} index={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
