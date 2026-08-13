import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/products"
      );

      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.name}
          />

          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;