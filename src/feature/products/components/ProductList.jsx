import { Link } from 'react-router';
import { Button, Container, Row, Col } from "reactstrap";
import ProductCard from './ProductCard';

const BadRequest = () => (
  <div className="container text-center mt-5 pt-4" role="alert">
    <h2 className="text-danger fs-4">
      <strong>¡Error!</strong> There's any results.
    </h2>
  </div>
);


function ProductList({ list = [] }) {
  return(
    <Container className="mt-4">
      {(list.length === 0) && <BadRequest />}
      <Row>
        {list.map((product) => 
          <Col key={product._id} sm="12" md="6" lg="4" className="mb-4">
            <ProductCard
              product={{
                name: product.name,
                price: product.price,
                category: product.category,
              }}
            />
            <div className="d-flex justify-content-start">
              <Link to={`/product/${product._id}/edit`} className="me-2">
                <Button color="info">Edit</Button>
              </Link>
              <Link to={`/product/${product._id}/delete`}>
                <Button color="danger">Delete</Button>
              </Link>
            </div>
          </Col>
        )}
      </Row>
    </Container>
)};

export default ProductList