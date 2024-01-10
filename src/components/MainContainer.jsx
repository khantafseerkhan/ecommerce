import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCart } from "../store-management/reducers/cartReducer";
import Layout from "./layout/Layout";

const MainContainer=()=>{

  


    return (
        <div>
             <Layout />
         </div>
    )
}

export default MainContainer;