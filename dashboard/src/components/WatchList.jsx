import React, { useContext } from "react";

import GeneralContext from "./GeneralContext";

import { watchlist } from "../data/data";

import DoughnoutChart from "./DoughnoutChart";


const WatchList = () => {

  return (

    <>

      <div className="h-100 d-flex flex-column">

        <div className="d-flex align-items-center gap-2 p-2 border-bottom">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="form-control form-control-sm border-0"
          />
          <span className="small text-muted text-nowrap">

            {watchlist.length} / 50

          </span>

        </div>
        <ul className="list-group list-group-flush flex-grow-1 overflow-auto">


          {
            watchlist.map((stock, index) => (

              <WatchListItem
                stock={stock}
                key={index}
              />

            ))
          }

        </ul>

      </div>

      <DoughnoutChart watchlist={watchlist} />


    </>

  );

};


export default WatchList;



const WatchListItem = ({ stock }) => {


  return (

    <li className="watchlist-item list-group-item position-relative cursor-move">


      <div className="d-flex align-items-center justify-content-between small">


        <p
          className={
            "mb-0 " +
            (stock.isDown
              ? "text-danger"
              : "text-success")
          }
        >

          {stock.name}

        </p>



        <div className="d-flex align-items-center gap-1">


          <span className="text-muted">

            {stock.percent}

          </span>



          <i

            className={
              "bi " +
              (
                stock.isDown
                  ? "bi-caret-down-fill text-danger"
                  : "bi-caret-up-fill text-success"
              )
            }

          ></i>



          <span>

            {stock.price}

          </span>


        </div>


      </div>



      <WatchListActions uid={stock.name} />


    </li>

  );

};




const WatchListActions = ({ uid }) => {


  const generalContext = useContext(GeneralContext);



  const handleBuyClick = () => {

    generalContext.openBuyWindow(uid);

  };



  const handleSellClick = () => {

    generalContext.openSellWindow(uid);

  };



  return (

    <div className="watchlist-actions position-absolute top-0 end-0 h-100 align-items-center gap-1 pe-2 bg-white">


      <button
        className="btn btn-primary btn-sm"
        onClick={handleBuyClick}
      >

        Buy

      </button>



      <button
        className="btn btn-danger btn-sm"
        onClick={handleSellClick}
      >

        Sell

      </button>



      <button className="btn btn-outline-secondary btn-sm">

        <i className="bi bi-bar-chart"></i>

      </button>



      <button className="btn btn-outline-secondary btn-sm">

        <i className="bi bi-three-dots"></i>

      </button>


    </div>

  );

};