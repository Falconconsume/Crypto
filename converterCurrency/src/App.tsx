import { useState } from "react";

import "./App.css";

interface ICurrencies {
  title: string;
  choose: boolean;
}

const currencies: Array<ICurrencies> = [
  { title: "USD", choose: true },
  { title: "EUR", choose: false },
  { title: "UAH", choose: false },
];

function App() {
  const [holdCurrency, setHoldCurrency] = useState("");
  const [input, setInput] = useState("");
  const [originalInput, setOriginalInput] = useState("");

  const convertStrategy = () => {
    let converted;
    switch (holdCurrency) {
      case "USD":
        converted = originalInput * 38;
        break;
      case "EUR":
        converted = originalInput * 40;
        break;
      case "UAH":
        converted = originalInput * 1;
        break;
    }
    setInput(converted);
  };

  return (
    <>
      <div className="main">
        <div className="list-block">
          <ul className="list">
            {currencies.map((e, index) => {
              return (
                <li
                  onClick={() => setHoldCurrency(e.title)}
                  className={holdCurrency === e.title ? "listCurrency" : ""}
                  key={index}
                >
                  {e.title}
                </li>
              );
            })}
          </ul>
          <input
            onChange={(e) => {
              setInput(e.target.value);
              setOriginalInput(Number(e.target.value));
            }}
            type="text"
          />
          <button onClick={() => convertStrategy()}>Convert</button>
        </div>
        <div className="list-block">
          <input value={input} type="text" disabled={true} />
        </div>
      </div>
    </>
  );
}

export default App;
