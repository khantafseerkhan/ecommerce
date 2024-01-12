import { useEffect, useState } from "react";

const CustomPagination=({
    data,
    itemsPerPage,
    onPageChange,
})=>{
    const [paginationNumbers, setPaginationNumbers] = useState([]);



    const [activePagination,setActivePagination]=useState(1);
    const handlePagination=(pageNo)=>{

         if(pageNo!=activePagination){
             onPageChange(pageNo)
         }
         setActivePagination(pageNo);
    }
    useEffect(()=>{
        let tempArray=[]
        if (data.length % itemsPerPage == 0) {
            var noOfPages = data.length / itemsPerPage;
            let index = 1;
            while (index <= noOfPages) {
              tempArray.push(index);
              index++;
            }
          } else {
            let temp = data.length - (data.length % itemsPerPage);
            var noOfPages = temp / itemsPerPage;
            noOfPages += 1;
            let index = 1;
            while (index <= noOfPages) {
              tempArray.push(index);
              index++;
            }
          
          }
          setPaginationNumbers(tempArray);
         

    },[data])



    return(
        <div className="pagination-container">
            <ul>
                {
                    paginationNumbers.map(element=>{
                        return (<li className={element==activePagination?"pagination-active":""} onClick={(e)=>{handlePagination(element)}}>{element}</li>)
                    })
                }
            </ul>
        </div>
        
    )

}

export default CustomPagination;
