import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// *HOME*
import Home from './feature/main/components/Home.jsx'
// *PRODUCTS*
import ProductPage from './feature/products/page/ProductPage';
import ProductForm from './feature/products/components/ProductForm.jsx';
import ProductDelete from './feature/products/components/ProductDelete';
import ProductPagination from './feature/products/page/ProductPagination.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
      children:[
        {
          index: true,
          Component: Home,
        },
        {
          path:'/ProductPage',
          Component: ProductPage, 
        },
        {
          path:'new-product',
          Component: ProductForm,
        },        
        {
          path:'/product/:id/edit',
          Component: ProductForm, 
        },
        {
          path:'/product/:id/delete',
          Component: ProductDelete,
        },
        {
          path: '/Pagination',
          Component: ProductPagination,
          // element: <h1 className='container mt-5 pt-4'>Pagination</h1> 
        }
      ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
