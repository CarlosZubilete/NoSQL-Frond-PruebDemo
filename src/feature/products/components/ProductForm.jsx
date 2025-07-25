import { useEffect } from 'react';
import { useNavigate , Link , useParams } from 'react-router-dom';
import { Container , Row , Col , Button , Label , Input , FormGroup} from 'reactstrap';
import { Formik, Form , Field , ErrorMessage} from 'formik';
import SchemaProduct  from '../schemas/ProductSchema';
import useNewProduct from '../hooks/useNewProduct';

// The component when use into the FORMIK
const ErrorOne = ({children}) => {
  return <span style={{fontSize:'.6rem', color:'red' , fontWeight:'bold'}} 
  className="container mt-5 pt-4"> 
    {children} 
  </span>
};

// If Something got wrong when connecting to the database.
const ErrorBack = () => (
  <div className="container text-center mt-5 pt-4" role="alert">
    <h2 className="text-danger fs-4">
      <strong>¡Error!</strong> The product could not be added.
    </h2>
  </div>
);

const Loading = () => (
  <div className="container text-center mt-5 pt-4">
    <div className="spinner-border text-primary" role="status"></div>
    <p className="mt-3">Loading...</p>
  </div>
);


function ProductForm () {
  
  const params = useParams();

  const { handleSubmitForm, success , product, error} = useNewProduct(params.id);

  // If everything is ok..
  const redirect = useNavigate();

  useEffect(()=>{
    if(success){
      redirect('/ProductPage');
    }
  },[success,redirect])


  if(params?.id && product == null) return <Loading />


  return(
    <Container className='className="container mt-5 pt-4"'>
      <span>{error && <ErrorBack/>}</span>
      <Row>
        <Col sm={{size:8, offset:2}}>
          <hr />
          <h3 className='font-weight-bold'>{(params?.id) ? 'Edit' : 'Add'} Producto </h3>
          <hr />
          <Formik 
            initialValues={{
              name: product?.name || '', 
              price: product?.price || 0 , 
              category: product?.category || '',
            }}
            onSubmit={handleSubmitForm}
            validationSchema={SchemaProduct}
          >
          {({isSubmitting}) =>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  as={Input}
                  className="mb-1"
                />
                <ErrorMessage name="name" component={ErrorOne} />
              </FormGroup>
        
              <FormGroup>
                <Label for="price">Price</Label>
                <Field
                  name="price"
                  id="price"
                  as={Input}
                  type="number"
                  className="mb-1"
                />
                <ErrorMessage name="price" component={ErrorOne} />
              </FormGroup>

              <FormGroup>
                <Label for="category">Category</Label>
                <Field
                  name="category"
                  id="category"
                  as={Input}
                  type="text"
                  className="mb-1"
                />
                <ErrorMessage name="category" component={ErrorOne} />
              </FormGroup>

              <Button type="submit" color="success" className="mt-3 me-3" 
                disabled={isSubmitting}>
                {(isSubmitting) ? ' Sending...' : 'Send'}
              </Button>
        
              <Link to="/ProductPage" 
                className={`text-light text-decoration-none ${isSubmitting ? 'disabled-link' : ''}`}
                onClick={(e)=>{ if(isSubmitting) e.preventDefault() }}
                >
                <Button  color="secondary" className="mt-3" disabled={isSubmitting}>
                Back
                </Button>
              </Link>
            </Form>
          }  
        </Formik>
        </Col>
      </Row>      
    </Container>
)};

export default ProductForm;