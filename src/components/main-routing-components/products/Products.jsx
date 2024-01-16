import {
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import CustomPagination from "../../CustomPagination";
import Filters from "./Filter";
import {
  getAllProducts,
  getCategoriesList,
} from "../../../services/products.service";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemPerPage = 5;
  const [categoriesList, setCategoriesList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedFilteredList, setSelectedFilteredList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getAllProducts();
        setTotalProducts(productData);
        setFilteredProducts(productData);
  
        const categoriesData = await getCategoriesList();
        setCategoriesList(categoriesData);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        setTotalProducts([]);
        setFilteredProducts([]);
        setCategoriesList([]);
      }
    };
  
    fetchData();
  }, []);

  const onPageChange = (pageNumber) => {
    const fromIndex = (pageNumber - 1) * itemPerPage;
    const tempArray = filteredProducts.slice(fromIndex, fromIndex + itemPerPage);
    setProductList(tempArray);
  };

  useEffect(() => {
    onPageChange(1);
  }, [filteredProducts]);

  const onFilterChange = (filterCheckList) => {
    setSelectedFilteredList(filterCheckList);
    let tempArray = JSON.parse(JSON.stringify(totalProducts));

    tempArray = tempArray.filter(
      (element) =>
        //filterCheckList.length>0?filterCheckList.includes(element.category):true
        (filterCheckList.length > 0
          ? filterCheckList.includes(element.category)
          : true) && element.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(tempArray);
  };

  const handleSearch = () => {
    onFilterChange(selectedFilteredList);
  };
  return (
    <Grid container>
      <Grid item xs={3} sx={{ mr: 2 }} className={"custom-container shadow"}>
        <Grid container>
          <Grid item xs={12}>
            <div className="header-section">
              <div className="left-section">Filters</div>
              <div className="right-section anchorTag">Clear All</div>
            </div>
          </Grid>
          {categoriesList.length == 0 ? (
            <Grid item xs={12}>
              <div className="filter-container">
                <i>Filters Not Availble ... </i>
              </div>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Filters
                categories={categoriesList}
                setSelectedFilteredList={setSelectedFilteredList}
                onFilterChange={onFilterChange}
              />
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid item xs={8.8} className={"custom-container shadow"}>
        <Grid container>
          <Grid item xs={12}>
            <div className="header-section">
              <div className="left-section">Products</div>
              <div className="right-section">
                <TextField
                  placeholder={"Search Product By Title ..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : "")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <Search
                          onClick={(e) => {
                            handleSearch();
                          }}
                          sx={{ cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </Grid>
          {productList.length > 0 && (
            <Grid item xs={12}>
              <CustomPagination
                data={filteredProducts}
                itemsPerPage={itemPerPage}
                onPageChange={onPageChange}
              />
            </Grid>
          )}

          {productList.length > 0 ? (
            productList.map((element, index) => {
              return (
                <Grid item xs={3.7} sx={{ m: 1 }}>
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
            })
          ) : (
            <Grid item xs={12}>
              <div className="filter-container">
                <i>Products Not Availble ... </i>
              </div>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
