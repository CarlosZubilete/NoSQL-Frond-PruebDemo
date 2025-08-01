import { useState } from "react";
import { Container, Pagination, PaginationItem, PaginationLink,Col } from "reactstrap";
import useProductPagination from '../hooks/useProductPagination';
import ProductListPaginaion from '../components/ProductListPagination';
import ShoppingCart from "../../cart/components/ShoppingCart";

function ProductPagination(){

  const[page,setPage] = useState(1);
  const {products, totalPage} = useProductPagination({page});

  const handleClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setPage(newPage);
    }
  }

  console.log('ProductPaginmation-> totalPage = ', totalPage);
  return (
     <Container className="container mt-5 pt-4 ">
      <Col className="d-flex justify-content-start">
        <h3>Lista de Compras</h3>
        <ShoppingCart />
      </Col>

      <hr />
      
      <ProductListPaginaion list={products} />

      <Pagination className="d-flex justify-content-center">
        {/* Botón anterior */}
        <PaginationItem disabled={page === 1}>
          <PaginationLink previous onClick={() => handleClick(page - 1)} />
        </PaginationItem>

        {/* Botones numerados */}
        {
          Array.from({ length: totalPage }, (_, i) => i + 1).map((num) => (
            <PaginationItem active={num === page} key={num}>
              <PaginationLink onClick={() => handleClick(num)}>
                {num}
              </PaginationLink>
            </PaginationItem>
          ))
        }

        {/* Botón siguiente */}
        <PaginationItem disabled={page === totalPage}>
          <PaginationLink next onClick={() => handleClick(page + 1)} />
        </PaginationItem>

      </Pagination>
    </Container>
)};

export default ProductPagination;

// TODO -> 1. To implement storage sesion becasue save the data and make the pagination. 
// TODO -> 2. and structurate the files to inprove the organization.