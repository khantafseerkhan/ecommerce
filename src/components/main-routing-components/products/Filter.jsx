import { Checkbox, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";


const Filters=({categories,onFilterChange,setSelectedFilteredList})=>{
    const [checkedFilterList,setCheckedFilterList]=useState([]);
    const [allChecked,setAllChecked]=useState(false);
    const handleFilter=(e,filterName)=>{
        let tempArray=[...checkedFilterList];

        if(e.target.checked==true){
            tempArray.push(filterName);
            
        }else{
            tempArray.splice(tempArray.indexOf(filterName,1))
        }
        setCheckedFilterList(tempArray)
    }

    useEffect(()=>{
        onFilterChange(checkedFilterList)
        setSelectedFilteredList(checkedFilterList)
    },[checkedFilterList])

  



    return (
        <div className="filters-list-container">
 <ul>
            {
               categories && categories.map(element=>{
                    return(
                        <li><Checkbox  id={element} 
                            onChange={(e)=>handleFilter(e,element)}
                        /><span>{element}</span></li>
                    )
                })
            }
        </ul>
        </div>
       
    )
}

export default Filters;