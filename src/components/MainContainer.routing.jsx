import { Route, Routes } from "react-router-dom"
import Home from "./main-routing-components/Home";
import Products from "./main-routing-components/products/Products";
import Cart from "./main-routing-components/cart/Cart";
import Product from "./main-routing-components/single-product/Product";


const MainContainerRouting=()=>{

    return(
        <Routes>
            <Route path="" Component={Home} />
            <Route path="home" Component={Home} />
            <Route path="products" Component={Products} />
            <Route path="product/:id" Component={Product} />

            
            <Route path="cart" Component={Cart} />

         </Routes>
    )
}

export default MainContainerRouting;