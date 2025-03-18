import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Core/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;