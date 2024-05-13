import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import TrendingProducts from "./components/TrendingProducts";
import { Toaster } from "react-hot-toast";
import NewArrival from "./components/NewArrival";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Team from "./components/Team";
// import Banner from "./components/Banner"


const App = () => {

  const [showCart, setShowCart] = useState(false)
  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}
        <Hero />
        <Category />
        <NewArrival />
        <Toaster
          position="top-center"
          reverseOrder={false} />
        {/* <Banner /> */}
        <TrendingProducts />
        <Feature />
        <Team />
        <Footer />
      </Provider>

    </div>
  )
}

export default App
