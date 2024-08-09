import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



import { useContext } from "react";
import { MoviesContext } from "../contextt/MovieProvide";
export interface IMovieList {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: "en" | "vn";
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IString {
  title: string;
  data: Array<IMovieList>;
}

const MovieList = ({ title, data }: IString) => {
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  
 
  const handleTrailer = useContext(MoviesContext)
 
  return (
    <div className="text-white p-10 mb-10">
      <p className="uppercase text-2xl mb-4">{title}</p>

      <Carousel responsive={responsive} className="flex items-center space-x-4">
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
      </Carousel>
      
    </div>
  );
};
export default MovieList;
