// import { useEffect, useState } from "react";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/products"
//       );

//       console.log("Products:", response.data);

//       setProducts(response.data.products || []);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-50 p-6">

//       <h1 className="text-3xl font-bold text-slate-800 mb-6">
//         Products
//       </h1>

//       {products.length === 0 ? (
//         <p className="text-slate-500">
//           No products found.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
//             >

//               {/* Product Image */}
//               <img
//                 src={`http://localhost:5000/${product.image}`}
//                 alt={product.name}
//                 className="w-full h-52 object-cover"
//               />

//               {/* Product Details */}
//               <div className="p-4">

//                 <h2 className="text-lg font-bold text-slate-800">
//                   {product.name}
//                 </h2>

//                 <p className="text-sm text-slate-500 mt-2">
//                   {product.category}
//                 </p>

//                 <p className="text-sm font-semibold text-slate-700 mt-2">
//                   ⭐ {product.rating}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>
//       )}

//     </div>
//   );
// };

// export default Products;