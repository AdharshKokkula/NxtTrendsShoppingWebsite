import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const amount = cartList.reduce(
        (total, eachItem) => total + eachItem.price * eachItem.quantity,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="cart-order-total-heading">
            <span className="cart-order-total">Order Total:</span> Rs {amount}/-
          </h1>
          <p className="cart-items-count">{cartList.length} Items in Cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
