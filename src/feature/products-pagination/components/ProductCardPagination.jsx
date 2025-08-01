import { Card, CardBody, CardTitle, CardText ,Button} from "reactstrap";
import useShoppingCart from "../../cart/context/useShoppingCart"; 
import { FaCartPlus } from 'react-icons/fa';
import '../styles/ProductCardPagination.css'

function ProductCardPagination({product}){

  const { addProduct } = useShoppingCart();

  return (
    <Card className="product-card shadow-sm">
      <CardBody>
        <CardTitle tag="h5" className="fw-bold text-primary">
          {product.name}
        </CardTitle>
        <CardText>
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </CardText>
        <CardText>
          <strong>Category:</strong> {product.category}
        </CardText>
        <Button
          onClick={() => addProduct(product)}
          className="d-flex align-items-center"
        >
        <FaCartPlus className="me-2" />
          Añadir al carrito
        </Button>
      </CardBody>
    </Card>
)};

export default ProductCardPagination;