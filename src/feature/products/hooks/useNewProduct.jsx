import {  useEffect, useState } from 'react';
import productService from '../services/productService.js';


async function saveProduct(id,values){
  if(id){
    return productService.editByID(id,values);
  }
  else{
    return productService.create(values);
  }
}

export default function useNewProduct(id){

  const[success,setSuccess] = useState(false);
  const[product,setProduct] = useState(null);
  const[error,setError] = useState(false);

  const handleSubmitForm = (values, {setSubmitting}) => { 
    console.log(values);

    setSubmitting(true);

    saveProduct(id,values)

      .then(()=>{
        setTimeout(() => {
          setSuccess(true);
          setSubmitting(false);
        }, 2500)
      })
      .catch(()=>{
        setError(true);
        setSubmitting(false);
        setSuccess(false);
      })
  }

  useEffect(()=>{   
      if(id){
      productService.findById(id)  
        .then((responseData) => {
          setProduct(responseData.data);
        })
        .catch(() => {
          // return un error
        })
    }
  },[id])

  return { handleSubmitForm , success , product, error }

}
