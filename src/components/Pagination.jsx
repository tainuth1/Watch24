import React from "react";
import { useNavigate } from "react-router-dom";

const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }
  return pages;
};

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  setTotalPages,
}) => {
  const navigate = useNavigate();
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center"
      >
        &#60;
      </button>
      {pageNumbers.map((page, idx) =>
        page === "..." ? (
          <span
            key={idx}
            className="min-w-10 h-10 px-3 flex items-center justify-center text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`min-w-10 h-10 px-3 rounded-md border border-gray-300 flex items-center justify-center transition-colors ${
              page === currentPage
                ? "bg-blue-500 text-white font-bold shadow-md "
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            disabled={page === currentPage}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center"
      >
        &#62;
      </button>
    </div>
  );
};

export default Pagination;
