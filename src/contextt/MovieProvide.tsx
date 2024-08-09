import { createContext, ReactNode, useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
import { trailerMovie } from "../ultis";

type MovieContextType = (id: number) => void;
const MoviesContext = createContext<MovieContextType>(()=>{});

interface Iprops {
    children: ReactNode;
}
const MovieProvider = ({children} : Iprops) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [movieTrailer, setMovieTrailer] = useState("");
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleTrailer = (id: number) => {
        trailerMovie(id).then((data) => {setMovieTrailer(data); setIsOpen(true)});
    }
    

    return (
        <MoviesContext.Provider value={handleTrailer}>
            {children}
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={movieTrailer} opts={opts} />
      </Modal>
        </MoviesContext.Provider>
    )
}
export {MoviesContext, MovieProvider}