import './App.css'
import { Route, Routes  } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Header from "./components/layout/header/Header";
import { persistor, store } from "./store-management/store";
import Products from "./components/main-routing-components/products/Products";
import Product from "./components/main-routing-components/single-product/Product";
import Cart from "./components/main-routing-components/cart/Cart";


function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="app">
     

          <Header />
         <div className="body-container">

         <Routes>
            <Route path="/" element={<Products />} />
            <Route path="home" element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />

         </Routes>
         </div>

   
        </div>
      </PersistGate>
    </Provider>

  );
}

export default App;
