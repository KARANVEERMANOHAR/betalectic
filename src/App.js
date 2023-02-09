import './App.css';
import Home from './Home';
import Favorite from './Favorite';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect} from 'react';
function App() {
  const [dataForFavorite, setDataForFavorite] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("dataForFavorite");
    if (data) {
      setDataForFavorite(JSON.parse(data));
    }
  }, []);

  const getFavouriteData = (data) => {
    let uniqueData = data.filter((obj, index, self) => {
      return self.findIndex((t) => t.pacakageName === obj.pacakageName) === index;
    });

    setDataForFavorite(uniqueData);
    localStorage.setItem("dataForFavorite", JSON.stringify(uniqueData));
  };

  const deleteFavorite = (id) =>{
    const updatedFavorite = dataForFavorite.filter((fav) => fav.id !== id);
    setDataForFavorite(updatedFavorite);
    
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home getFavouriteData={getFavouriteData}/>} />
          <Route exact path="/Favorite" element={<Favorite dataForFavorite={dataForFavorite} deleteFavorite={deleteFavorite}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
