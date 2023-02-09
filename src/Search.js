

function Search({dataRecivedFromSearch, search}) {
    // const [data, setData] = useState("");

    // const sendData = (e) =>{
    //     const query = e.target.value;
    //     setData(query);
    //     dataRecivedFromSearch(data)
    // }
  return (
    <div className='search'>
        <input type="text" placeholder='Search NPM Package' className='search-input' value={search} onChange={(e) =>dataRecivedFromSearch(e.target.value)}/>
    </div>
  )
}

export default Search