import { Grid } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import Filters from "./Filter";
import {
  getAllProducts,
  getCategoriesList,
} from "../../../services/products.service";
import ProductsHeader from "./ProductsHeader";
import ProductCatelog from "./ProductCatelog";

const Products = () => {
  const [totalProducts, setTotalProducts] = useState([]);
  const itemPerPage = 6;
  const [categoriesList, setCategoriesList] = useState([]);

  const [productList, setProductList] = useState([]);
  const [selectedFilteredList, setSelectedFilteredList] = useState([]);
  const [search,setSearch]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getAllProducts();
        setTotalProducts(productData);

        const categoriesData = await getCategoriesList();
        setCategoriesList(categoriesData);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        setTotalProducts([]);
        setCategoriesList([]);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    let tempArray = JSON.parse(JSON.stringify(totalProducts));

    tempArray = tempArray.filter(
      (element) =>
        //filterCheckList.length>0?filterCheckList.includes(element.category):true
        (selectedFilteredList.length > 0
          ? selectedFilteredList.includes(element.category)
          : true) && element.title.toLowerCase().includes(search.toLowerCase())
    );
    return tempArray;
  }, [totalProducts,selectedFilteredList, search]);

  const handleFilterChange = (check, filterName) => {
    let tempArray = [...selectedFilteredList];

    if (check === true) {
      tempArray.push(filterName);
    } else {
      tempArray.splice(tempArray.indexOf(filterName), 1);
    }
    setSelectedFilteredList(tempArray);
  };



  const FilterSection = () => {
    if (categoriesList.length === 0)
      return (
        <div className="filter-container">
          <i>Filters Not Availble ... </i>
        </div>
      );
    else
      return (
        <Filters

          categories={categoriesList}
          selectedFilteredList={selectedFilteredList}
          handleFilters={handleFilterChange}
        />
      );
  };

  const ProductList = () => {
    if (filteredProducts.length > 0)
      return <ProductCatelog productList={filteredProducts} itemPerPage={itemPerPage}/>;
    else
      return (
        <div className="filter-container">
          <i>Products Not Availble ... </i>
        </div>
      );
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        className={"custom-container mobile-customize-filter shadow"}
        lg={3}
        md={4}
        sm={12}
        xs={12}
        sx={{ ml: 1, mr: 1 }}
      >
        
        <div>
          <div className="header-section">
            <div className="left-section">Filters</div>
            {/* <div className="right-section anchorTag">Clear All</div> */}
            <div className="close " > X</div>
          </div>
        </div>

        {<FilterSection />}
      </Grid>

      <Grid
        item
        className={"custom-container shadow"}
        lg={8}
        md={7}
        sm={12}
        xs={12}
        sx={{ ml: 1, mr: 1 }}
      >
        <ProductsHeader />
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default Products;
