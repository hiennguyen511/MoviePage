import axios from "axios";



export const getMovie = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const response = await axios(url, options)
      const data = await response.data;
      
      return data.results;
      
    
}
export const getMovieRate = async () =>{
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const response = await axios(url2, options)
  const data = await response.data
  return data.results
}



 export const handleSearch = async (searchVal: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  const response = await axios(url, options)
  const data = await response.data
  return data.results
 
}

 export const  trailerMovie = async (id: number) => {
  
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    const movieAPI = await axios(url, options);
    const data = await movieAPI.data;
    return data.results[0].key
    
   
};


