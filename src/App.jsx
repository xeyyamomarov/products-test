import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import ProductPage from "./Pages/ProductPage"
import ProductDetails from "./components/ProductDetails"
import { ProductContextProvider } from "./context/ProductContext"

function App() {

  return (
    <>
    <ProductContextProvider>

    
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element ={<AppLayout/>} >
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        </Route>
    </Routes>
    </BrowserRouter>
    </ProductContextProvider>
  
    </>
  )
}

export default App
