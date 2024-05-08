import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [details,setDetails] = useState({})

    const {id} = useParams()


    useEffect(()=>{
        const getProductDetails = async(id)=>{
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setDetails(data)
        }

        getProductDetails(id)
    },[id])

    console.log(details)
  return (
    <div className='card' >
         <img src={details.image} alt="" />
        <h2>{details.title}</h2>
        <p>Price: {details.price}$</p>
    </div>
  )
}

export default ProductDetails