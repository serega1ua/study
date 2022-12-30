import React, { useContext } from "react";
import TextInput from "../../../../Forms/TextInput";
import {Formik} from "formik";
import { Context } from "../../../../../context/MainContext";
import TextArea from "../../../../Forms/TextArea";
import ResetBtn from "../../../../Forms/ResetBtn";
import SubmitBtn from "../../../../Forms/SubmitBtn";
import Select from "../../../../Forms/Select";
import usePopup from "../../../../../hooks/usePopup";
import {editSelectedMovie, postNewMovie} from "../../../../../app/features/moviesReducer";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

const Popup = ({ heading, isEdit, movie }) => {
  const contextData  =
    useContext(Context);
  const options = [
    { name: "Crime", id: 1 },
    { name: "Documentary", id: 2 },
    { name: "Horror", id: 3 },
    { name: "Comedy", id: 4 },
  ];
  const dispatch = useDispatch();
  const postMovie = (data) => {
    dispatch(postNewMovie({newMovie: data}));
  }
  const saveEditMovie = (movieData) => {
    dispatch(editSelectedMovie({movie: movieData}))
    window.location.reload();
  }
  const closeShowPopup = usePopup(false, contextData?.setIsShowPopup, contextData?.isShowPopup)
  const closeShowEditPopup = usePopup(
    false,
    contextData?.setIsShowEditPopup,
    contextData?.isShowEditPopup
  );
  const formikEdit = useFormik({
    initialValues: {
      title: "",
      poster_path: "",
      rating: "",
      release_date: "",
      genre: "",
      runtime: "",
      overview: ""
    },
    validate: (values) => {
        const err = {};
        if(!values.title) {
          err.title = "Required*";
        }
        if(values.title.charAt(0) !== values.title.charAt(0).toUpperCase()) {
          err.title = "Title must begin with A"
        }
        if(!values.poster_path.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) && !values.poster_path) {
          err.poster_path = "Required*";
        }
        if(!values.overview) {
          err.overview = "Required*";
        }
        if(!values.release_date) {
          err.release_date = "Release date shouldn't be empty"
        }
        if(!values.runtime) {
          err.runtime = "Required*";
        }
        if(values.rating < 0) {
            err.rating = "Rating shouldn't be less than 0";
        }
        if(values.runtime < 0) {
          err.runtime = "Runtime minimum value 0"
        }
        if(!values.genre) {
          err.genre = "Required*";
        }
        return err;
    },
    onSubmit: (values, {setSubmitting}) => {
      console.log(values);
      setSubmitting(false);
    },
  });
  return (
    <>
      {!isEdit && contextData?.isShowPopup && !movie && (
        <div className="fixed flex flex-col top-3 bottom-3 items-center justify-start shadow-lg left-1/2 -translate-x-1/2 inset-0 z-10 p-3 text-white bg-black w-popup">
          <div className="flex flex-col">
            <button onClick={closeShowPopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="humbleicons hi-times w-16 absolute right-3 text-white"
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
            <h1 className="text-5xl text-white mt-10 mb-5">{heading}</h1>
            <Formik
                validateOnChange
                initialValues={
                  {
                    title: "",
                    poster_path: "",
                    rating: "",
                    release_date: "",
                    genre: "",
                    runtime: "",
                    overview: ""
                  }
                }
                validate={values => {
                  const err = {};
                  if(!values.title) {
                    err.title = "Required*";
                  }
                  if(values.title.charAt(0) !== values.title.charAt(0).toUpperCase()) {
                    err.title = "Title must begin with A"
                  }
                  if(!values.poster_path.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) && !values.poster_path) {
                    err.poster_path = "Required*";
                  }
                  if(!values.overview) {
                    err.overview = "Required*";
                  }
                  if(!values.release_date) {
                    err.release_date = "Release date shouldn't be empty";
                  }
                  if(!values.runtime) {
                    err.runtime = "Required*";
                  }
                  if(values.rating < 0) {
                      err.rating = "Rating shouldn't be less than 0";
                  }
                  if(values.runtime < 0) {
                    err.runtime = "Runtime minimum value 0";
                  }
                  if(!values.genre) {
                    err.genre = "Required*";
                  }
                  return err;
                }}
                onSubmit={(values, {setSubmitting}) => {
                  console.log(values);
                  setSubmitting(false);
                }}
            >
              {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="flex max-w-fit">
                      <div className="flex flex-col mr-8 basis-1/2 max-w-fit">
                        <TextInput
                            name="title"
                            placeholder=""
                            handleBlur={handleBlur}
                            label="TITLE"
                            handleChange={handleChange}
                            value={values.title}
                            type="text"
                        />
                          <span className="mb-6 text-lightred">{errors.title && touched.title && errors.title}</span>
                      </div>
                      <div className="flex flex-col basis-1/2 max-w-fit">
                        <TextInput
                            name="release_date"
                            placeholder=""
                            value={values.release_date}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            label="RELEASE DATE"
                            type="date"
                        />
                          <span className="mb-6 text-lightred">{errors.release_date && touched.release_date && errors.release_date}</span>
                      </div>
                    </div>
                    <div className="flex max-w-fit">
                      <div className="flex flex-col mr-8 basis-1/2 max-w-fit">
                        <TextInput
                            name="poster_path"
                            placeholder=""
                            handleBlur={handleBlur}
                            value={values.poster_path}
                            handleChange={handleChange}
                            label="MOVIE URL"
                            type="text"
                        />
                          <span className="mb-6 text-lightred">{errors.poster_path && touched.poster_path && errors.poster_path}</span>
                      </div>
                      <div className="flex flex-col basis-1/2 max-w-fit">
                        <TextInput
                            name="rating"
                            placeholder=""
                            value={values.rating}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            label="RATING"
                            type="number"
                        />
                          <span className="mb-6 text-lightred">{errors.rating && touched.rating && errors.rating}</span>
                      </div>
                    </div>
                    <div className="flex min-w-fit items-end">
                      <div className="flex flex-col mr-8 min-w-fit basis-1/2">
                        <Select
                            placeholder=""
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            value={values.genre}
                            name="genre"
                            items={options}
                            label="GENRE" />
                          <span className="mb-6 text-lightred">{errors.genre && touched.genre && errors.genre}</span>
                      </div>
                      <div className="flex flex-col min-w-fit basis-1/2">
                        <TextInput
                            name="runtime"
                            handleBlur={handleBlur}
                            value={values.runtime}
                            placeholder=""
                            handleChange={handleChange}
                            label="RUNTIME"
                            type="number"
                        />
                          <span className="mb-6 text-lightred">{errors.runtime && touched.runtime && errors.runtime}</span>
                      </div>
                    </div>
                    <TextArea
                        handleBlur={handleBlur}
                        name="overview"
                        placeholder=""
                        value={values.overview}
                        handleChange={handleChange}
                        label="OVERVIEW"
                        rows={5} />
                      <span className="mb-6 text-lightred">{errors.overview && touched.overview && errors.overview}</span>
                    <div className="flex justify-end max-w-full">
                      <ResetBtn />
                      <SubmitBtn submitEditedMovie={null} postNewMovie={() => postMovie(
                          {
                                title: values.title,
                                vote_average: Number(values.rating),
                                release_date: values.release_date,
                                poster_path: values.poster_path,
                                overview: values.overview,
                                runtime: values.runtime,
                                genres: [`${values.genre}`]
                              }
                      )} isEdit={false} disabled={isSubmitting} />
                    </div>
                  </form>
                )}
            </Formik>
          </div>
        </div>
      )}
      {isEdit && contextData?.isShowEditPopup && movie && (
        <div className="fixed flex flex-col top-3 bottom-3 items-center justify-start shadow-lg left-1/2 -translate-x-1/2 inset-0 z-10 p-3 text-white bg-black w-popup">
          <div className="flex flex-col">
            <button onClick={closeShowEditPopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="humbleicons hi-times w-16 absolute right-3 text-white"
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
            <h1 className="text-3xl text-white mt-5 mb-3">{heading}</h1>
                  <form onSubmit={formikEdit.handleSubmit}>
                    <div className="flex max-w-fit">
                      <div className="flex flex-col mr-8 basis-1/2 max-w-fit">
                        <TextInput
                            name="title"
                            placeholder={movie.title}
                            handleBlur={formikEdit.handleBlur}
                            label="TITLE"
                            handleChange={formikEdit.handleChange}
                            value={formikEdit.values.title}
                            type="text"
                        />
                          <span className="mb-6 text-lightred">{formikEdit.errors.title && formikEdit.touched.title && formikEdit.errors.title}</span>
                      </div>
                      <div className="flex flex-col basis-1/2 max-w-fit">
                        <TextInput
                            name="release_date"
                            placeholder={movie.release_date}
                            value={formikEdit.values.release_date}
                            handleBlur={formikEdit.handleBlur}
                            handleChange={formikEdit.handleChange}
                            label="RELEASE DATE"
                            type="date"
                        />
                          <span className="mb-2 text-lightred">{formikEdit.errors.release_date && formikEdit.touched.release_date && formikEdit.errors.release_date}</span>
                      </div>
                    </div>
                    <div className="flex max-w-fit">
                      <div className="flex flex-col mr-8 basis-1/2 max-w-fit">
                        <TextInput
                            name="poster_path"
                            placeholder={movie.poster_path}
                            handleBlur={formikEdit.handleBlur}
                            value={formikEdit.values.poster_path}
                            handleChange={formikEdit.handleChange}
                            label="MOVIE URL"
                            type="text"
                        />
                          <span className="mb-6 text-lightred">{formikEdit.errors.poster_path && formikEdit.touched.poster_path && formikEdit.errors.poster_path}</span>
                      </div>
                      <div className="flex flex-col basis-1/2 max-w-fit">
                        <TextInput
                            name="rating"
                            placeholder=""
                            value={formikEdit.values.rating}
                            handleBlur={formikEdit.handleBlur}
                            handleChange={formikEdit.handleChange}
                            label="RATING"
                            type="number"
                        />
                          <span className="mb-6 text-lightred">{formikEdit.errors.rating && formikEdit.touched.rating && formikEdit.errors.rating}</span>
                      </div>
                    </div>
                    <div className="flex min-w-fit items-end">
                      <div className="flex flex-col mr-8 min-w-fit basis-1/2">
                        <Select placeholder={movie.genre}
                                handleBlur={formikEdit.handleBlur}
                                handleChange={formikEdit.handleChange}
                                value={formikEdit.values.genre}
                                name="genre"
                                items={options}
                                label="GENRE" />
                          <span className="mb-6 text-lightred">{formikEdit.errors.genre && formikEdit.touched.genre && formikEdit.errors.genre}</span>
                      </div>
                      <div className="flex flex-col min-w-fit basis-1/2">
                        <TextInput
                            name="runtime"
                            handleBlur={formikEdit.handleBlur}
                            value={formikEdit.values.runtime}
                            placeholder={movie.runtime}
                            handleChange={formikEdit.handleChange}
                            label="RUNTIME"
                            type="number"
                        />
                          <span className="mb-6 text-lightred">{formikEdit.errors.runtime && formikEdit.touched.runtime && formikEdit.errors.runtime}</span>
                      </div>
                    </div>
                    <TextArea
                        handleBlur={formikEdit.handleBlur}
                        name="overview"
                        placeholder={movie.overview}
                        value={formikEdit.values.overview}
                        handleChange={formikEdit.handleChange}
                        label="OVERVIEW"
                        rows={5} />
                      <span className="mb-6 text-lightred">{formikEdit.errors.overview && formikEdit.touched.overview && formikEdit.errors.overview}</span>
                    <div className="flex justify-end max-w-full">
                      <ResetBtn />
                      <SubmitBtn submitEditedMovie={() => saveEditMovie(
                          {
                            title: formikEdit.values.title,
                            vote_average: Number(formikEdit.values.rating),
                            release_date: formikEdit.values.release_date,
                            poster_path: formikEdit.values.poster_path,
                            overview: formikEdit.values.overview,
                            runtime: formikEdit.values.runtime,
                            genres: [`${formikEdit.values.genre}`],
                            id: movie.id,
                            }
                      )} postNewMovie={null} isEdit={true} disabled={formikEdit.isSubmitting} />
                    </div>
                  </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
