import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Core/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/CheckOutPage";
import OrderConfirmation from "./Pages/OrderConfirmation";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Layout>
  );
}

export default App;
