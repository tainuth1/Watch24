import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setMsg] = useState("");
  const [params, setParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(params.get("page")) || 1
  );
  const [totalPages, setTotalPages] = useState(0);
  const search = params.get("search") || "";

  const fetchMovies = async () => {
    try {
      setMovies([]);
      setLoading(true);
      setMsg("");
      const endpoint =
        search != ""
          ? `${apiUrl}/search/movie?api_key=${apiKey}&query=${search}&page=${currentPage}`
          : `${apiUrl}/movie/popular?api_key=${apiKey}&page=${currentPage}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      setMsg("Connection Failed");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [currentPage, search]);

  return (
    <div className="w-full py-10">
      <div className="w-[1300px] m-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-gray-800 font-bold">Popular Movies</h1>
        </div>
        <div className="grid grid-cols-5 gap-7 mt-10">
          {errMsg && (
            <div className="col-span-5 flex flex-col items-center justify-center">
              <img
                src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
                alt="Connection Error"
                className="w-32 h-32 mb-4"
              />
              <p className="text-lg text-red-500 font-semibold">{errMsg}</p>
            </div>
          )}
          {loading && (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-[340px] bg-gray-300 rounded-lg mb-3"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </>
          )}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        />
      </div>
    </div>
  );
};

export default Home;
