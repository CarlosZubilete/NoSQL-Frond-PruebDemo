import './App.css'
import { Outlet } from 'react-router'
import Header from './feature/main/components/Header'
import Footer from './feature/main/components/Footer'
// import ProductListProvider from './feature/products-crud/contexts/ProductListProvider'
import ShoppingCartProvider from './feature/cart/context/ShoppingCartProvider';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className="flex-grow-1">
        <ShoppingCartProvider>
          <Outlet />
        </ShoppingCartProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App
