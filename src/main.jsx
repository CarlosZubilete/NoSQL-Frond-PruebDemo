import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// *HOME*
import Home from './feature/main/components/Home.jsx'
// *PRODUCTS-CRUD*
import ProductPage from './feature/products-crud/page/ProductPage';
import ProductForm from './feature/products-crud/components/ProductForm.jsx';
import ProductDelete from './feature/products-crud/components/ProductDelete';
// *PRODUCTS-PAGINATION*
import ProductPagination from './feature/products-pagination/page/ProductPagination.jsx'

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
        }
      ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
