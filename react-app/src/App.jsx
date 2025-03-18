import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Core/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/CheckOutPage";
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderHistory from "./Pages/OrderHistory";
import Wishlist from "./Pages/Wishlist";
import Account from "./Pages/Account";
import AddressBook from "./Pages/AddressBook";
import PaymentMethods from "./Pages/PaymentMethods";
import ProtectedRoute from "./Components/utils/ProtectedRoute";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
          <Route path="/address-book" element={<AddressBook />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
