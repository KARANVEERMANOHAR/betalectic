import React, { useState } from "react";

function List({ filterData, dataForFavorite }) {
  const [radio, setRadio] = useState("");
  const [discription, setDiscription] = useState("");

  const submiData = (e) => {
    e.preventDefault();
    dataForFavorite(radio, discription);
  };
  return (
    <div className="search-list">
      {filterData.length !== 0 ? (
        <form action="" className="search-list-form">
          <p className="List-heading">Add pacakage to favorite :</p>
          <div className="list-flex">
            {filterData.slice(0, 3).map((item, index) => {
              return (
                <div key={index} className="list-radio">
                  <input
                    type="radio"
                    id="radio"
                    className="list-radio-input"
                    value={radio}
                    name={item.package.name}
                    onClick={(e) => setRadio(e.target.name)}
                  />
                  <label htmlFor="radio" className="list-radio-label">
                    {item.package.name}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="list-discription">
            <p className="list-discription-para">Why is this your favorite?</p>
            <input
              type="text"
              className="list-discription-input"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>

          <button className="submit-button" onClick={submiData}>
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default List;
