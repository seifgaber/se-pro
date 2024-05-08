import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Productdetails(){
    const api_url="https://fakestoreapi.com/products";
    const [product ,setProduct]= useState({});
    const params= useParams();
    console.log(params);
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
       .then((res)=>res.json())
       .then((product)=>setProduct(product));
    },[])
    return(
       <Product product={product} showButton={false}/>
    );
}
export default Productdetails