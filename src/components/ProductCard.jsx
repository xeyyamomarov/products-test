import { useNavigate } from "react-router-dom"
import { useProductContext } from "../context/ProductContext"

const ProductCard = ({product}) => {

    const navigate = useNavigate()


    const {addToFav} = useProductContext()


    const handleDetails=()=>{
        navigate(`/product/${product.id}`)
    }


    // console.log(fav)


  return (
    <div className="card"  >
        <img src={product.image} alt="" onClick={handleDetails}  />
        <h2>{product.title.slice(0,10) + " ....."}</h2>
        <p>Price: {product.price}$</p>
        <span onClick={()=>addToFav(product)} >fav</span>
    </div>
  )
}

export default ProductCard