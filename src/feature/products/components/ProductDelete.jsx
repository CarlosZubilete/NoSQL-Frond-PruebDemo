import { Link , useParams } from 'react-router'; 
import { Container, Button } from 'reactstrap';
import ProductCard from './ProductCard';
import useProductDelete from '../hooks/useProductDelete';

function ProductDelete(){

  const {id} = useParams(); 

  const{product,error,isSending,handleSubmitForm} = useProductDelete(id);

  if(error) return <p className="container mt-5 pt-4">Error... </p>;
  if (!product) return <p className="container mt-5 pt-4"> Cargando...</p>;

  return(
  <Container className="container mt-5 pt-4">

    <h1>Yoo'll deleted :</h1>

    <ProductCard product={{
      name: product.name,
      price: product.price,
      category: product.category,
    }} />
    
    <Button  color="danger" className="btn btn-danger mt-3 me-3" type='button'
      disabled={isSending} onClick={handleSubmitForm}>
      {(isSending) ? '....' : 'Delete'}
    </Button>

    <Link to="/ProductPage" 
      className={`text-light text-decoration-none ${isSending ? 'disabled-link' : ''}`}
      onClick={(e)=>{ if(isSending) e.preventDefault() }}
    >
      <Button  color="secondary" className="mt-3" disabled={isSending}>
        Back
      </Button>
    </Link>

  </Container>)
}

export default ProductDelete;