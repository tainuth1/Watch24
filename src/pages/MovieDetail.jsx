import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState(null);
  const [movieKey, setMovieKey] = useState(null);
  const { id } = useParams();

  const fetchMovieKey = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/movie/${id}/videos?api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie key");
      }
      const data = await response.json();
      setMovieKey(data.results[0].key);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchMovie = async () => {
    try {
      const response = await fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movie");
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMovie();
    fetchMovieKey();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="w-full h-[330px] bg-red-500">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
      </div>
      <div className="w-[1300px] mx-auto mt-[-150px] z-10 relative">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <div className="w-full aspect-[9/14] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-9">
            <div>
              <h1 className="text-4xl font-bold text-white">
                {movie.original_title}
              </h1>
              <div className="flex items-center gap-2 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellowgreen"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span className="text-yellow-500">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-200">•</span>
                <span className="text-gray-200">{movie.release_date}</span>
                <span className="text-gray-200">•</span>
                <span className="text-gray-200">{movie.runtime}m</span>
              </div>
              <div className="flex gap-2 mt-5">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className=" text-[13px] text-white px-4 py-1 rounded-full backdrop-blur-sm bg-black/50 cursor-pointer hover:bg-white/10 transition-all duration-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-7">
                Overview
              </h2>
              <p className="text-gray-600 mt-2 font-normal">{movie.overview}</p>
              <div className="flex gap-2">
                <button
                  className="flex items-center gap-2 mt-4 bg-black text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4 12.5V3.5a.5.5 0 0 1 .757-.429l6.363 3.692a.5.5 0 0 1 0 .866z" />
                  </svg>
                  Watch Trailer
                </button>
                <a
                  href={movie.homepage}
                  target="_blank"
                  className="flex items-center gap-2 mt-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4 12.5V3.5a.5.5 0 0 1 .757-.429l6.363 3.692a.5.5 0 0 1 0 .866z" />
                  </svg>
                  Watch Movie
                </a>
              </div>

              {showModal && (
                <div
                  className="fixed z-60 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
                  onClick={() => setShowModal(false)}
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg relative"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                  >
                    <button
                      className="absolute top-2 right-2 text-black"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="white"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                    <div className="">
                      <iframe
                        width="720"
                        height="405"
                        src={`https://www.youtube.com/embed/${movieKey}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
