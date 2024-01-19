import { useEffect, useMemo, useState } from "react";

const CustomPagination = ({ data, itemsPerPage, onPageChange }) => {
  const [activePagination, setActivePagination] = useState();
  const handlePagination = (pageNo) => {
    if (pageNo !== activePagination) {

      let fromIndex = (pageNo - 1) * itemsPerPage;
      let toIndex=fromIndex + itemsPerPage
    
      onPageChange(fromIndex,toIndex);

    }
    setActivePagination(pageNo);
  };

  const paginationNumbers=useMemo(()=>{
    let tempArray = [];
    const noOfPages = Math.ceil(data.length / itemsPerPage);
    for (let index = 1; index <= noOfPages; index++) {
      tempArray.push(index);
    }
    return tempArray;
  },[data,itemsPerPage]);



  useEffect(() => {
    handlePagination(1)
  }, [data]);

  return (
    <div className="pagination-container">
      <ul>
        {paginationNumbers.map((element) => {
          return (
            <li
              className={element === activePagination ? "pagination-active" : ""}
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
