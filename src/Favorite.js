import React from "react";
import NavBar from "./NavBar";
import "./App.css";
function Favorite({ dataForFavorite, deleteFavorite }) {
  return (
    <div>
      <NavBar />
      {dataForFavorite.length === 0 ? (
        <h1 className="no-data">You have no favorite NPM pacakages:</h1>
      ) : (
        <div className="Favorite-list">
          {dataForFavorite.map((item) => {
            return (
              <div className="Favorite-item" key={item.id}>
                <p className="Favorite-para">{item.pacakageName}</p>
                <button
                  className="Favorite-btn"
                  onClick={() => deleteFavorite(item.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Favorite;
