import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function ProductCardPagination({product}){

  return (
    <Card className="mb-3 shadow-sm">
      <CardBody>
        <CardTitle tag="h5" className="fw-bold text-primary">
          {product.name}
        </CardTitle>
        <CardText>
          <strong>Price:</strong> ${product.price}
        </CardText>
        <CardText>
          <strong>Category:</strong> {product.category}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default ProductCardPagination;