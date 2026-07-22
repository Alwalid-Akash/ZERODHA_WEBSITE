import React, { useState, useEffect } from "react";
import axios from "axios";
//import { positions } from "../data/data";
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h5 className="fw-normal mb-3">
        Positions ({allPositions.length})
      </h5>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr className="small text-muted">
              <th>Product</th>
              <th>Instrument</th>
              <th className="text-end">Qty.</th>
              <th className="text-end">Avg.</th>
              <th className="text-end">LTP</th>
              <th className="text-end">P&amp;L</th>
              <th className="text-end">Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;

              const profClass =
                profit >= 0 ? "text-success" : "text-danger";

              const dayClass =
                stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={stock._id}>
                  <td>{stock.product}</td>

                  <td>{stock.name}</td>

                  <td className="text-end">
                    {stock.qty}
                  </td>

                  <td className="text-end">
                    ₹{stock.avg.toFixed(2)}
                  </td>

                  <td className="text-end">
                    ₹{stock.price.toFixed(2)}
                  </td>

                  <td className={`text-end ${profClass}`}>
                    ₹{profit.toFixed(2)}
                  </td>

                  <td className={`text-end ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;