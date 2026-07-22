import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { API_BASE_URL } from "../api";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: Number(stockPrice),
        mode: "BUY",
      });

      console.log("Success:", response.data);
      generalContext.closeBuyWindow();
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div
      className="card shadow position-absolute cursor-move"
      id="buy-window"
      draggable="true"
      style={{ width: "40%", bottom: 0, left: "35%", zIndex: 100 }}
    >
      <div className="card-header bg-primary text-white">
        <h6 className="mb-1">
          {uid} <span className="small">NSE</span>
        </h6>
      </div>

      <div className="card-body">
        <div className="d-flex gap-3 mb-3">
          <div className="flex-fill">
            <label className="form-label small text-muted">Qty.</label>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              className="form-control"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </div>
          <div className="flex-fill">
            <label className="form-label small text-muted">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              className="form-control"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </div>
        </div>
      </div>

      <div className="card-footer d-flex align-items-center justify-content-between bg-white">
        <span className="small text-muted">
          Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={handleBuyClick}>
            Buy
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
