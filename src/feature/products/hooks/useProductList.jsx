import {useState, useEffect} from 'react';
import productService from '../services/productService';
// import useProductListContext from '../contexts/useProductListContext';
import  cacheProducList from '../data/cacheProductList'

function useProductList(){

  const[products,setProducts] = useState([]);
  const[total, setTotal] = useState(0);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(false);
  // const { needsRefresh } = useProductListContext();

  useEffect(()=>{ 
    setLoading(true); 

    if(cacheProducList.products) {
      setProducts(cacheProducList.products);
      setTotal(cacheProducList.count);
      setLoading(false);
      return;
    }

    productService.findAll()
      .then((responseData) => {
        cacheProducList.products = responseData.result.data; // guardar en cache
        cacheProducList.count = responseData.result.total; 
        console.log('Recet memoryCache');

        setProducts(responseData.result.data || []);
        setTotal(responseData.result.total || 0);    
      })
      .catch(() =>setError(true))
      .finally(() => setLoading(false));   

  },[]);
  
  return { products,  loading ,error , total};
}

export default useProductList;


  // useEffect(()=>{
  //   productService.findAll()
  //   .then((responseData)=>{
  //     setProducts(responseData.result.data || []);
  //     setTotal(responseData.result.total || 0);    
  //   })
  //   .catch(()=>{
  //     setError(true);
  //   })
  //   .finally(()=>{
  //     setLoading(false);
  //     })
  // },[]);



