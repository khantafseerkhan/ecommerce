import { Grid } from "@mui/material";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Products = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        getProductsList();

    }, [])

    const getProductsList = () => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setProductList(data))


    }

    useEffect(()=>{
        console.log(productList)
    },[productList])

    return (
        <Grid container xs={12} spacing={2}>
                                   
            {
                
                productList.map((element, index) => {
                    return (
                        <Grid item xs={4} >
                            <ProductCart
                                title={element.title}
                                price={element.price}
                                category={element.category}
                                descrption={element.descrption}
                                id={element.id}
                            img={element.image}
                            rating={element.rating}

                            />
                        </Grid>
                    )
                })
            }



        </Grid>
    )
}

export default Products;