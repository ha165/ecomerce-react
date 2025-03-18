import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path = "/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}
/******  8e6dfd9c-369a-4613-9fe8-86f2d841cff7  *******/

export default App;
