import { useContext, } from "react";

import { IMovieList } from "./movieList";

import { MoviesContext } from "../contextt/MovieProvide";

interface Isearch {
    title: string;
    data: Array<IMovieList>;
}
const Search = ({title, data}: Isearch) => {
  const handleTrailer = useContext(MoviesContext);
 
  
  
    return(
        <div className="text-white p-10 mb-10 ">
            <p className="uppercase text-2xl mb-4">{title}</p>
            <div className="flex flex-wrap gap-5">
            {data.length > 0 &&
          data.map((item, index) => (
            <div
              key={index}
              className="w-[200px] h-[300px] relative group cursor-pointer"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full">
                <div className="absolute w-full h-full left-0 top-0 bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover  "
                />
                <div className="absolute  bottom-4 left-4">
                  <p className="uppercase text-md">{item.original_title}</p>
                </div>
              </div>
            </div>
          ))}
            </div>
            
        
        </div>
    )
}
export default Search;