import { Grid } from "@mui/material";
import ProductCart from "./ProductCart";
import CustomPagination from "../../custom-components/CustomPagination";
import { useState } from "react";

const ProductCatelog = ({ productList,itemPerPage}) => {

const [currentItems,setCurrentItems]=useState([]);


  

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
            <CustomPagination 
            data={productList}
            itemsPerPage={itemPerPage}
            onPageChange={(fromIndex)=>setCurrentItems(JSON.parse(JSON.stringify(productList)).splice(fromIndex,itemPerPage))}

            />
        </Grid>

        <Grid container>
          {currentItems.map((element) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12}>
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
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default ProductCatelog;
