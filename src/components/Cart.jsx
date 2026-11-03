
function Cart({ cart, onUpdateQuantity }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <h2>Your Shopping Cart</h2>
        <p>{totalItems} item(s) in your cart</p>
      </div>

      {cart.length === 0 ? (
        <p className="empty-message">
          Your cart is empty. Add some products!
        </p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-product">
                  <div className="cart-icon">💊</div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} each</p>
                  </div>
                </div>

                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => onUpdateQuantity(item.id, -1)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => onUpdateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
          </div>

          <p className="demo-note">
            Demo only: checkout and payment are not enabled.
          </p>
        </>
      )}
    </section>
  );
}

export default Cart;
