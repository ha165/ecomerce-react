import ProductList from "../components/core/ProductList";

const Home = () => {
  return (
    <div>
      <div className="bg-orange-100 text-center p-6">
        <h1 className="text-3xl font-bold">Welcome to Online Ecom</h1>
        <p className="text-gray-600 mt-2">
          Best prices on all your favorite products!
        </p>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
