import { useState, useEffect } from "react";
import productService from "../services/productService";

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
  
  return { products,  loading ,error , totalCount, totalPage: Math.ceil(totalCount/limit)};
}

export default useProductPagination;
