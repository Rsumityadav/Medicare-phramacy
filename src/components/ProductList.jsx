
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <h2>Our Products</h2>
        <p>Explore our healthcare essentials</p>
      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="categories">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item ? "category active" : "category"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p className="empty-message">
            No products found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductList;
