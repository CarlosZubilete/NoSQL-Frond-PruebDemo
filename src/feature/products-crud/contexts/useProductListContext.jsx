import { useContext } from 'react';
import ProductListContext from './ProductListContext';

function useProductListContext() {
  const context = useContext(ProductListContext);

  if (!context) {
    throw new Error('useProductList must be used inside of a ProductListProvider');
  }

  return context;
}

export default useProductListContext;

