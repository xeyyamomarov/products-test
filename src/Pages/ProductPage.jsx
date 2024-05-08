import axios from "axios";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductContext";

const ProductPage = () => {


  const {products,setProducts,handleFilter} = useProductContext()

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="cards" >
      {handleFilter?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
