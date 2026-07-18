import React from "react";

import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h5 className="fw-normal mb-3">Positions ({positions.length})</h5>

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
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td className="text-end">{stock.qty}</td>
                  <td className="text-end">{stock.avg.toFixed(2)}</td>
                  <td className="text-end">{stock.price.toFixed(2)}</td>
                  <td className={"text-end " + profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={"text-end " + dayClass}>{stock.day}</td>
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
