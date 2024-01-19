import { Snackbar } from "@mui/material"
import { useEffect } from "react";
import { useSelector } from "react-redux"


const ProductAlert=({status,message,updateToaster})=>{

 const handleClose=()=>{
    updateToaster();
 }

    return (
        <Snackbar
  open={status}
  autoHideDuration={500}
  message={message}
  onClose={handleClose}

/>
    )
}
export default ProductAlert