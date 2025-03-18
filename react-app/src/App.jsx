import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Layout>
  );
}

export default App;
