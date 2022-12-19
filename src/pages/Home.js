import { Link } from "react-router-dom";
export default function Home({ stocks }) {
  return (
    <div className="home">
      <table>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        {stocks.map((stock) => {
          return (
            <tr>
              <td>{stock.symbol}</td>
              <td>
                <Link to={`/stocks/${stock.symbol}`}>{stock.name} </Link>
              </td>
              <td>{stock.lastPrice}</td>
              {stock.change > 0 ? (
                <td style={{ color: "green" }}>{stock.change}</td>
              ) : (
                <td style={{ color: "red" }}>{stock.change}</td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
