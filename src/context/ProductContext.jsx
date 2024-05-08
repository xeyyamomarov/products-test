import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState([]);
  const [filterData,setFilterData] = useState([]);
  const [filter,setFilter] = useState("")


  function addToFav(newFav) {
    setFav([...fav, newFav]);
  }

  const handleFilter = products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fav,
        setFav,
        addToFav,
        filterData,
        setFilterData,
        filter,
        setFilter,
        handleFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProductContext() {
  const context = useContext(ProductContext);
  return context;
}

export { useProductContext, ProductContextProvider };
