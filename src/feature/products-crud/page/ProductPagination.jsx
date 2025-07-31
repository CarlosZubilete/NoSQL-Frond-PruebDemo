import { useState } from "react";
import { Container } from "reactstrap";
import useProductPagination from "../hooks/useProductPagination";
import ProductList from '../components/ProductList';

function ProductPagination(){

  const[page,setPage] = useState(1);
  const {products, totalPage} = useProductPagination({page});

  console.log('ProductPaginmation-> totalPage = ', totalPage);
  return (
  <Container className="container mt-5 pt-4">
    <h2 className="text-center"> <strong>Pagination</strong> </h2>
    <hr />
    <ProductList list={products} />
    {
      Array(totalPage).keys().
        map((value) =>
        <button key={value} onClick={()=>setPage(value+1)}>{value+1}</button>
      )
    }
  </Container> 
)};

export default ProductPagination;