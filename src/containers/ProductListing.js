import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponents from './ProductComponents';
import axios from 'axios';
import {setProducts} from '../redux/actions/ProductsAction'
const ProductListing = () => {
     //fectch the product from redux store
    
     const product=useSelector((state)=>state); 
     const dispatch=useDispatch();
     const fetechProducts= async ()=>
      {
        const req=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Error",err);
        });
        dispatch(setProducts(req.data));
     }
     
     useEffect (()=>{
      fetechProducts();
     },[]);
     console.log("Products From Server",product);
  return (
   
    <div className='ui grid container'>
      <ProductComponents/>
    </div>
  )
}

export default ProductListing
