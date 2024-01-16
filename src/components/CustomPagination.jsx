import { useEffect, useState } from "react";

const CustomPagination = ({ data, itemsPerPage, onPageChange }) => {
  const [paginationNumbers, setPaginationNumbers] = useState([]);
  const [activePagination, setActivePagination] = useState(1);
  const handlePagination = (pageNo) => {
    if (pageNo !== activePagination) {
      onPageChange(pageNo);
    }
    setActivePagination(pageNo);
  };

  useEffect(() => {
    let tempArray = [];
    const noOfPages = Math.ceil(data.length / itemsPerPage);
    for (let index = 1; index <= noOfPages; index++) {
      tempArray.push(index);
    }
    setPaginationNumbers(tempArray);
    setActivePagination(1);
  }, [data]);

  return (
    <div className="pagination-container">
      <ul>
        {paginationNumbers.map((element) => {
          return (
            <li
              className={element == activePagination ? "pagination-active" : ""}
              onClick={(e) => {
                handlePagination(element);
              }}
            >
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomPagination;
