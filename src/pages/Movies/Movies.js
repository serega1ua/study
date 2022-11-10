import React, { useEffect, useState, useRef, useContext } from "react";
import DeletePopup from "../../components/MoviesLayout/Main/components/Popup/DeletePopup";
import Popup from "../../components/MoviesLayout/Main/components/Popup/Popup";
import SuccessAddedPopup from "../../components/MoviesLayout/Main/components/Popup/SuccessAddedPopup";
import MainSection from "../../components/MoviesLayout/Main/MainSection";
import { Context } from "../../context/MainContext";
import usePopup from "../../hooks/usePopup";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isContextShow, setIsContextShow] = useState({
    triggeredMovie: false,
    id: 1,
  });
  const {
    isShowDeletePopup,
    setIsShowDeletePopup,
    isShowEditPopup,
    setIsShowEditPopup,
    isShowSuccessAddedPopup,
    setSelectedMovie,
    setIsSelectedMovie,
  } = useContext(Context);
  const fetchMovies = async () => {
    const res = await fetch(
      "data.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    );
    const data = await res.json();
    setMovies(data);
  };
  const showEditPopup = usePopup(false, setIsShowEditPopup, isShowEditPopup);
  const showDeletePopup = usePopup(
    false,
    setIsShowDeletePopup,
    isShowDeletePopup
  );
  const setModalOn = (id) => {
    const currentMovie = movies.filter((movie) => movie.id === id);
    currentMovie[0].triggered = true;
    setIsContextShow({
      triggeredMovie: currentMovie[0].triggered,
      id: currentMovie[0].id,
    });
  };
  const setModalOff = (id) => {
    const currentMovie = movies.filter((movie) => movie.id === id);
    currentMovie[0].triggered = false;
    setIsContextShow({
      triggeredMovie: currentMovie[0].triggered,
      id: currentMovie[0].id,
    });
  };
  const selectMovie = (movie) => {
    setIsSelectedMovie(true);
    setSelectedMovie(movie);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <MainSection>
      <div className="bg-black">
        <div className="flex flex-wrap max-w-5xl justify-between m-auto">
          <div className="flex flex-col justify-between items-start">
            <h2 className="text-white text-xl mt-6">
              <span className="font-bold">{movies.length}</span> movies found
            </h2>
            <div className="flex flex-wrap justify-between">
              {movies.map((movie) => (
                <div key={movie.id} className="mt-6">
                  <div className="group relative">
                    <img
                      src={movie.cover}
                      alt={movie.title}
                      onClick={() => selectMovie(movie)}
                    />
                    <button
                      onClick={() => setModalOn(movie.id)}
                      className="hidden bg-gray py-1 px-1 rounded-full group-hover:block group-hover:absolute group-hover:top-3 group-hover:right-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="humbleicons hi-dots-vertical w-12 text-white"
                      >
                        <g
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <rect width="4" height="4" x="10" y="3" rx="2" />
                          <rect width="4" height="4" x="10" y="10" rx="2" />
                          <rect width="4" height="4" x="10" y="17" rx="2" />
                        </g>
                      </svg>
                    </button>
                    {isContextShow.id === movie.id &&
                      isContextShow.triggeredMovie && (
                        <div className="context-menu bg-black py-6 pr-10 pl-2 text-white absolute top-0 right-0">
                          <button
                            className="absolute top-1 right-1"
                            onClick={() => setModalOff(movie.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              className="humbleicons hi-times w-12"
                            >
                              <g
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-width="2"
                              >
                                <path d="M6 18L18 6M18 18L6 6" />
                              </g>
                            </svg>
                          </button>
                          <ul>
                            <li className="mt-3 hover:bg-lightred">
                              <a href="#edit" onClick={showEditPopup}>
                                Edit
                              </a>
                            </li>
                            <li className="mt-3 hover:bg-lightred hover:min-w-max">
                              <a href="#delete" onClick={showDeletePopup}>
                                Delete
                              </a>
                            </li>
                          </ul>
                          {isShowDeletePopup && <DeletePopup />}
                          {isShowEditPopup && (
                            <Popup movie={movie} isEdit={true} heading="EDIT" />
                          )}
                        </div>
                      )}
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <h3 className="text-white">{movie.title}</h3>
                    <span className="text-white text-sm border-2 rounded border-superlightgray py-1 px-2">
                      {movie.year}
                    </span>
                  </div>
                  <h3 className="text-white opacity-50 mb-12">
                    {movie.genres}
                  </h3>
                </div>
              ))}
            </div>
            {isShowSuccessAddedPopup && <SuccessAddedPopup />}
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default Movies;
