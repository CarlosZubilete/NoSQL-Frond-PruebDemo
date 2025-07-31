import { useState } from "react";
import ProductListContext from './ProductListContext'

function ProductListProvider ({children}) {

  const [needsRefresh, setNeedsRefresh] = useState(false);
  // const [cache,setCache] = useState([]);

  const triggerRefresh = () => {
    // toggle the flag
    // setNeedsRefresh(prev => !prev);
    setNeedsRefresh(!needsRefresh);
    console.log('triggerRefresh():', !needsRefresh);
  };

  return (<>
    <ProductListContext.Provider value={{needsRefresh,triggerRefresh}}>
      {children}
    </ProductListContext.Provider>
  </>)
} ;


export default ProductListProvider;

// export{ProductListProvider}

