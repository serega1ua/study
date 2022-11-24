import React, { useEffect, useState, useRef, useContext } from "react";
import DeletePopup from "../../components/MoviesLayout/Main/components/Popup/DeletePopup";
import Popup from "../../components/MoviesLayout/Main/components/Popup/Popup";
import SuccessAddedPopup from "../../components/MoviesLayout/Main/components/Popup/SuccessAddedPopup";
import MainSection from "../../components/MoviesLayout/Main/MainSection";
import { Context } from "../../context/MainContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../app/features/moviesReducer";
import MovieTemplatePoster from "../../assets/movie-poster-template.jpg";

const Movies = () => {
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
    setIsShowSuccessAddedPopup,
    isSelectedMovie,
    selectedMovie,
    setSelectedMovie,
    setIsSelectedMovie,
  } = useContext(Context);
  const dispatch = useDispatch();
  const reduxMovies = useSelector((state) => state?.movies);
  // const fetchMovies = async () => {
  //   const res = await fetch(
  //     "data.json",

  //     {
  //       headers: {
  //         "Content-Type": "application/json",

  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   setMovies(data);
  // };
  const setModalOn = (id) => {
    const currentMovie = reduxMovies.filter((movie) => movie.id === id);
    setIsContextShow({
      id: currentMovie[0].id,
      triggeredMovie: currentMovie[0],
    });
  };
  const setModalOff = (id) => {
    const currentMovie = reduxMovies.filter((movie) => movie.id === id);
    setIsContextShow({
      triggeredMovie: false,
      id: currentMovie[0].id,
    });
  };
  const selectMovie = (movie) => {
    setIsSelectedMovie(true);
    setSelectedMovie(movie);
  };
  const fetchMoviesWithRedux = () => {
    // @ts-ignore
    dispatch(fetchMovies());
  };
  useEffect(() => {
    fetchMoviesWithRedux()
  }, []);
  return (
      <MainSection>
        <div className="bg-black">
          <div className="flex flex-wrap max-w-5xl justify-between m-auto">
            <div className="flex flex-col justify-between items-start">
              <h2 className="text-white text-xl mt-6">
                <span className="font-bold">{reduxMovies.length}</span> movies
                found
              </h2>
              <div className="flex flex-wrap justify-between">
                {reduxMovies.map((movie) => (
                    <div key={movie.id} className="mt-6">
                      <div className="group relative">
                        <img
                            src={movie.poster_path}
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
                                      <a
                                          href="#edit"
                                          onClick={() =>
                                              setIsShowEditPopup(!isShowEditPopup)
                                          }
                                      >
                                        Edit
                                      </a>
                                    </li>
                                    <li className="mt-3 hover:bg-lightred hover:min-w-max">
                                      <a
                                          href="#delete"
                                          onClick={() => setIsShowDeletePopup(true)}
                                      >
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
                      {movie.release_date}
                    </span>
                      </div>
                      <h3 className="text-white opacity-50 mb-12">
                        {movie.genres.map((genre) => genre + " ")}
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
