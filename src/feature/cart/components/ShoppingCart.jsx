import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import useShoppingCart from "../context/useShoppingCart";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const { listCart } = useShoppingCart();
  const [bounce, setBounce] = useState(false);

  // Disparamos la animación cada vez que cambia el carrito
  useEffect(() => {
    if (listCart.length > 0) {
      setBounce(true);
      const t = setTimeout(() => setBounce(false), 300);
      return () => clearTimeout(t);
    }
  }, [listCart.length]);

  return (
    <div className="shoppingCart">
      <button className="shoppingCart__button">
        <FaShoppingCart size={28} />
        <span className={`shoppingCart__badge ${bounce ? 'bounce' : ''}`}>
          {listCart.length}
        </span>
      </button>
    </div>
  );
}

export default ShoppingCart;
