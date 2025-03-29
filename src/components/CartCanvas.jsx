import { useState } from "react";

const CartOffcanvas = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Muesli Fitness Energy, gluten free..",
      price: 18.7,
      quantity: 1,
      image: "./prod1.png",
    },
    {
      id: 2,
      name: "Fresh orange Klementina Span",
      price: 12.17,
      quantity: 1,
      image: "./prod2.png",
    },
    {
      id: 3,
      name: "Pepsi Soda classic, Can",
      price: 15.29,
      quantity: 1,
      image: "./prod3.png",
    },
    {
      id: 4,
      name: "Pesto sauce with parmesan and basil",
      price: 29.12,
      quantity: 1,
      image: "./prod4.png",
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div
      className='offcanvas offcanvas-end'
      tabIndex={-1}
      id='offcanvasCart'
      aria-labelledby='offcanvasCartLabel'>
      <div className='offcanvas-header cart-offcanvas-header'>
        <h5 className='offcanvas-title' id='offcanvasCartLabel'>
          Shopping cart
        </h5>
        <button
          type='button'
          className='btn-close text-reset'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        />
      </div>
      <div className='offcanvas-body'>
        <div className='cart-product-list'>
          {cartItems.map((item) => (
            <div className='cart-product-item' key={item.id}>
              <div className='cart-product-content'>
                <img
                  src={item.image}
                  alt='Product Image'
                  className='cart-product-image'
                />
                <div className='cart-product-details'>
                  <div className='cart-product-title'>{item.name}</div>
                  <div className='cart-product-price'>
                    ${item.price.toFixed(2)}
                  </div>
                  <div className='cart-quantity-controls'>
                    <button
                      className='btn btn-sm btn-outline-danger btn-decrease'
                      onClick={() => handleDecrease(item.id)}>
                      <i className='fa-solid fa-minus'></i>
                    </button>
                    <div className='cart-quantity-display'>{item.quantity}</div>
                    <button
                      className='btn btn-sm btn-outline-danger btn-increase'
                      onClick={() => handleIncrease(item.id)}>
                      <i className='fa-solid fa-plus'></i>
                    </button>
                    <button
                      className='btn-remove'
                      onClick={() => handleRemove(item.id)}>
                      <i className='fa-solid fa-close'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='offcanvas-footer'>
        <div className='cart-subtotal'>
          <p className='subtotal-text'>Subtotal:</p>
          <span className='subtotal-amount'>${calculateSubtotal()}</span>
        </div>
        <div className='footer-actions'>
          <button className='btn btn-custom btn-custom1'>View Cart</button>
          <button className='btn btn-custom btn-custom2'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartOffcanvas;
