// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../../services/productApi";

// const AddProduct = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     rating: "",
//   });

//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // Handle text inputs
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle image
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   // Submit product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage("");
//     setError("");

//     if (!formData.name || !formData.category || !formData.rating) {
//       setError("Please fill all fields");
//       return;
//     }

//     if (!image) {
//       setError("Please select a product image");
//       return;
//     }

//     try {
//       setLoading(true);

//       const data = new FormData();

//       data.append("name", formData.name);
//       data.append("category", formData.category);
//       data.append("rating", formData.rating);
//       data.append("image", image);

//       const response = await createProduct(data);

//       console.log("PRODUCT CREATED:", response);

//       if (response.success) {
//         setMessage("Product added successfully!");

//         // Clear form
//         setFormData({
//           name: "",
//           category: "",
//           rating: "",
//         });

//         setImage(null);

//         // Go to products page after 1 second
//         setTimeout(() => {
//           navigate("/admin-dashboard/products");
//         }, 1000);
//       } else {
//         setError(response.message || "Failed to add product");
//       }
//     } catch (error) {
//       console.error("ADD PRODUCT ERROR:", error);

//       setError(
//         error.response?.data?.message ||
//           "Something went wrong"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">

//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">
//           Add Product
//         </h1>

//         <p className="mt-2 text-gray-500">
//           Add a new product to your store.
//         </p>
//       </div>

//       {/* Form Card */}
//       <div className="max-w-3xl rounded-2xl bg-white p-8 shadow-sm">

//         <form onSubmit={handleSubmit}>

//           {/* Product Name */}
//           <div className="mb-5">
//             <label className="mb-2 block font-semibold text-gray-700">
//               Product Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter product name"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Category */}
//           <div className="mb-5">
//             <label className="mb-2 block font-semibold text-gray-700">
//               Category
//             </label>

//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//             >
//               <option value="">
//                 Select Category
//               </option>

//               <option value="T-Shirts">
//                 T-Shirts
//               </option>

//               <option value="Shirts">
//                 Shirts
//               </option>

//               <option value="Pants">
//                 Pants
//               </option>

//               <option value="Jeans">
//                 Jeans
//               </option>

//               <option value="Shoes">
//                 Shoes
//               </option>

//               <option value="Accessories">
//                 Accessories
//               </option>
//             </select>
//           </div>

//           {/* Rating */}
//           <div className="mb-5">
//             <label className="mb-2 block font-semibold text-gray-700">
//               Rating
//             </label>

//             <input
//               type="number"
//               name="rating"
//               value={formData.rating}
//               onChange={handleChange}
//               min="0"
//               max="5"
//               step="0.1"
//               placeholder="Enter rating"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Image */}
//           <div className="mb-6">
//             <label className="mb-2 block font-semibold text-gray-700">
//               Product Image
//             </label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full rounded-lg border border-gray-300 p-3"
//             />

//             {image && (
//               <p className="mt-2 text-sm text-gray-500">
//                 Selected: {image.name}
//               </p>
//             )}
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="mb-5 rounded-lg bg-red-50 p-3 text-red-600">
//               {error}
//             </div>
//           )}

//           {/* Success */}
//           {message && (
//             <div className="mb-5 rounded-lg bg-green-50 p-3 text-green-600">
//               {message}
//             </div>
//           )}

//           {/* Buttons */}
//           <div className="flex gap-4">

//             <button
//               type="button"
//               onClick={() =>
//                 navigate("/admin-dashboard")
//               }
//               className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
//             >
//               {loading ? "Adding..." : "Add Product"}
//             </button>

//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;