import {useState, useEffect} from 'react';
import productService from '../services/productService';

 function useProductList(){

  const[products,setProducts] = useState([]);
  // const[total, setTotal] = useState(0);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(false);

  useEffect(()=>{
    productService.findAll()
    .then((responseData)=>{
      setProducts(responseData.data || []);
      // setTotal(responseData.total || 0);    
    })
    .catch(()=>{
      setError(true);
    })
    .finally(()=>{
      setLoading(false);
      })
  },[]);

  return { products,  loading , error };
}

export default useProductList;

