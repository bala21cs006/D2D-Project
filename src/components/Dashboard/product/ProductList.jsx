import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      if (response.data.success) {
        setProducts(response.data.products || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    navigate(`/dashboard/products/delete/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/products/edit/${id}`);
  };

  return (
    <div className="product-list-container">

      <div className="product-list-header">
        <div>
          <h2>Products</h2>
          <p>Manage all your products</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => navigate("/dashboard/products/add")}
        >
          <FiPlus />
          Add Product
        </button>
      </div>

      {loading ? (
        <div className="product-loading">
          Loading products...
        </div>
      ) : products.length === 0 ? (
        <div className="no-products">
          <p>No products found.</p>

          <button
            onClick={() => navigate("/dashboard/products/add")}
          >
            Add Your First Product
          </button>
        </div>
      ) : (
        <div className="product-table-wrapper">
          <table className="product-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>

                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={`http://localhost:5000/${product.image}`}
                      alt={product.name}
                      className="product-table-image"
                    />
                  </td>

                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>
                    ⭐ {product.rating}
                  </td>

                  <td>
                    <div className="product-actions">

                      <button
                        className="edit-product-btn"
                        onClick={() => handleEdit(product._id)}
                        title="Edit Product"
                      >
                        <FiEdit />
                      </button>

                      <button
                        className="delete-product-btn"
                        onClick={() => handleDelete(product._id)}
                        title="Delete Product"
                      >
                        <FiTrash2 />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  );
};

export default ProductList;