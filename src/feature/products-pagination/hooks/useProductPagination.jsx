import { useState, useEffect } from "react";
import productService from '../../products-crud/services/productService';

function useProductPagination ({page}){

  const[products,setProducts] = useState([]);
  const[totalCount, setTotalCount] = useState(0);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(false);
  const[limit,setLimit] = useState(1);


  useEffect(()=>{ 
    setLoading(true); 

    productService.findAll({page})
      .then((responseData) => {
        setProducts(responseData.data || []);
        setTotalCount(responseData.total || 0);
        setLimit(responseData.limit);    
      })
      .catch(() =>setError(true))
      .finally(() => setLoading(false));   

  },[page]);
  
  console.log('useProdutPagination, limit = ', limit);
  
  return { products,  loading ,error , totalCount, totalPage: Math.ceil(totalCount/limit)};
}

export default useProductPagination;
