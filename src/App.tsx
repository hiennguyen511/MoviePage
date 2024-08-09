import { useEffect, useState } from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import MovieList from "./components/movieList";
import "./index.css";
import Search from "./components/search";
import { getMovie, getMovieRate, handleSearch } from "./ultis";
import { MovieProvider } from "./contextt/MovieProvide";
function App() {
  const [movieList, setMovieList] = useState([])
  const [movieRate, setMovieRate] = useState([]);
  const [search, setSearch] = useState([])
 


  useEffect(() => {
    getMovie().then(data => {setMovieList(data)}) 
    getMovieRate().then(data => {setMovieRate(data)})
    
  }, []);

const resultsSearch = (key : string) => {
  handleSearch(key).then((data) => setSearch(data))
}
  


  return (
    <MovieProvider>
      <div className="bg-black">
      <Header  onSearch={resultsSearch}/>
      <Banner />
      {search.length > 0 ? <Search title="Ket quả tìm kiếm" data={search}/> : 
      <>
        <MovieList title={"phim mới"} data={movieList}/>
        <MovieList title={"phim hot"} data={movieRate}/>
      </>}
      
    </div>
    </MovieProvider>
    
  );
}

export default App;
