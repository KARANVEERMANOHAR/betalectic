import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import List from "./List";
import { useState, useEffect } from "react";
function Home({ getFavouriteData }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilteredData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=reactjs")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  useEffect(() => {
    const filteredData = data.filter((data) => {
      return data.package.name.includes(search);
    });

    setFilteredData(filteredData);
    if (search === "") {
      setFilteredData([]);
    }
  }, [search, data]);

  const dataRecivedFromSearch = (searchdata) => {
    setSearch(searchdata);
  };

  const dataForFavorite = (radio, discription) => {
    const favoriteData = {
      id: Date.now(),
      pacakageName: radio,
      discription: discription,
    };

    const updatedFavorite = [...favorite, favoriteData];

    setFavorite(updatedFavorite);
  };

  useEffect(() => {
    getFavouriteData(favorite);
  }, [favorite]);

  return (
    <div>
      <NavBar />
      <Search dataRecivedFromSearch={dataRecivedFromSearch} search={search} />
      <List filterData={filterData} dataForFavorite={dataForFavorite} />
    </div>
  );
}

export default Home;
