import { useState } from "react";
import { Container, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import useProductPagination from '../hooks/useProductPagination';
import ProductListPaginaion from '../components/ProductListPagination';

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
     <Container className="container mt-5 pt-4">
      <h2 className="text-center"><strong>Pagination</strong></h2>
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