import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import productService from '../services/productService';
import cacheProducList from '../data/cacheProductList';

export default function useProductDelete(id){
  const [product,setProduct] = useState({});
  const [error,setError] = useState(false);
  const [isSending,setIsSending] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    productService.findById(id)
    .then((responseData)=>{
      setProduct(responseData.data);
      setError(false);
    })
    .catch(()=> setError(true))
  }, [])

  const handleSubmitForm = (evento) => {
    evento.preventDefault();
    setIsSending(true); 
    cacheProducList.products = null;
    cacheProducList.count = 0;

    console.log('Reset cache');

    setTimeout(() => {
      productService.deleteByID(id)   
      .then(()=>{
        navigate('/ProductPage');
      })
    }, 2500)
  }
  
  return {product,error,isSending,handleSubmitForm}; 
};