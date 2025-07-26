import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductList from '../hooks/useProductList';
import ProductList from '../components/ProductList';
// import useProductListContext from '../contexts/useProductListContext';

const Loading = () => (
  <div className="container text-center mt-5 pt-4">
    <div className="spinner-border text-primary" role="status"></div>
    <p className="mt-3">Loading...</p>
  </div>
);

function PageProduct () {
  const[listAll, setListAll] = useState([]);

  const { products , loading  , total } = useProductList();
  // const { needsRefresh, triggerRefresh } = useProductListContext();
  // const { needsRefresh } = useProductListContext();

  useEffect(()=>{
    setListAll(products);
 
  },[products])

  if(loading) return <Loading />

  // const handlerFilter = (filterTxt) => {
  // setListAll(products.filter((product) => {
  //   return product.nombre.toUpperCase().includes(filterTxt.toUpperCase());
  // }))

  return(
      <div className="container mt-5 pt-4">
        <h2 className="">Products | TOTAL = <strong>{total}</strong>  </h2>
        <Link to="/new-product" className="text-light text-decoration-none">    
          <button type="button" className="btn btn-success mb-3">
            Add Product
          </button>
        </Link>
        <hr />
        {/* <FilterText onFilter={handlerFilter} />  */}
        <hr />
        <ProductList list={listAll} />
        <hr />
      </div>
  )
}

export default PageProduct