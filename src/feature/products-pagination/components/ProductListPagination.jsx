import { Container, Row, Col } from "reactstrap";
import ProductCardPagination from './ProductCardPagination';

const BadRequest = () => (
  <div className="container text-center mt-5 pt-4" role="alert">
    <h2 className="text-danger fs-4">
      <strong>¡Error!</strong> There's any results.
    </h2>
  </div>
);

function ProductListPagination({ list = [] }) {

  return(
    <Container className="mt-4">
      {(list.length === 0) && <BadRequest />}
      <Row>
        {list.map((product) => 
          <Col key={product._id} sm="12" md="6" lg="4" className="mb-4">
            <ProductCardPagination
              product={{
                name: product.name,
                price: product.price,
                category: product.category,
              }}
            />
          </Col>
        )}
      </Row>
    </Container>
)};

export default ProductListPagination;