import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Show({ stocks }) {
  let { symbol } = useParams();
  const [stock, setStock] = useState(null);

  const getStock = () => {
    const found = stocks.find((st) => st.symbol === symbol);
    setStock(found);
  };
  useEffect(() => {
    getStock();
  }, []);
  const loading = () => {
    return <h1>Loading</h1>;
  };
  const loaded = () => {
    return (
      <div className="show">
        <h1>{stock.symbol}</h1>
        <h3>{stock.name}</h3>
        <h2>Last Price: {stock.lastPrice}</h2>
        {stock.change > 0 ? (
          <h3 style={{ color: "green" }}>Change: {stock.change}</h3>
        ) : (
          <h3 style={{ color: "red" }}>Change: {stock.change}</h3>
        )}
        <h4>high: {stock.high}</h4>
        <h4>low: {stock.low}</h4>
        <h5>open: {stock.open}</h5>
      </div>
    );
  };

  return stock ? loaded() : loading();
}
