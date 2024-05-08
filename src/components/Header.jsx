import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import Filter from "./Filter";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const { setProducts } = useProductContext();

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProductsByCategory = async () => {
      if (categoryName) {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );

        console.log(data,"data")
        setProducts(data);
      } else {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      }
    };
    getProductsByCategory();
  }, [categoryName]);
  return (
    <header>
      <ul>
        <Link to="/product">Product</Link>
      </ul>
      <Filter/>
      <select onChange={(e) => setCategoryName(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
