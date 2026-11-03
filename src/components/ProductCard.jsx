
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <span>💊</span>
        )}
      </div>

      <p className="product-category">{product.category}</p>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p className="product-price">₹{product.price}</p>

      <button
        className="add-button"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
