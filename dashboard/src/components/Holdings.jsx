import React, { useState, useEffect } from "react";
import axios from "axios";
//import { holdings } from "../data/data";
const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allHoldings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="container-fluid">

      <h3 className="title mb-4">
        Holdings ({allHoldings.length})
      </h3>


      <div className="table-responsive shadow-sm rounded">

        <table className="table table-hover align-middle">

          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>


          <tbody>

            {allHoldings.map((stock, index) => {

              const curValue = stock.price * stock.qty;

              const profit =
                curValue - stock.avg * stock.qty;

              const profClass =
                profit >= 0
                  ? "text-success"
                  : "text-danger";

              const dayClass =
                stock.isLoss
                  ? "text-danger"
                  : "text-success";


              return (
                <tr key={stock._id || index}>

                  <td className="fw-semibold">
                    {stock.name}
                  </td>

                  <td>
                    {stock.qty}
                  </td>

                  <td>
                    ₹{stock.avg.toFixed(2)}
                  </td>

                  <td>
                    ₹{stock.price.toFixed(2)}
                  </td>

                  <td>
                    ₹{curValue.toFixed(2)}
                  </td>


                  <td className={profClass}>
                    ₹{profit.toFixed(2)}
                  </td>


                  <td className={profClass}>
                    {stock.net}
                  </td>


                  <td className={dayClass}>
                    {stock.day}
                  </td>

                </tr>
              );

            })}

          </tbody>

        </table>

      </div>


      <div className="row mt-5 g-3">


        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">

              <h5>
                ₹29,875.<span>55</span>
              </h5>

              <p className="text-muted mb-0">
                Total investment
              </p>

            </div>
          </div>
        </div>



        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">

              <h5>
                ₹31,428.<span>95</span>
              </h5>

              <p className="text-muted mb-0">
                Current value
              </p>

            </div>
          </div>
        </div>



        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">

              <h5 className="text-success">
                ₹1,553.40 (+5.20%)
              </h5>

              <p className="text-muted mb-0">
                P&L
              </p>

            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

export default Holdings;