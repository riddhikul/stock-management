import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  const[productForm,setProductForm]=useState()
  const addProduct=()=>{

  }
  // Example data for current stock
  const stockData = [
    { id: 1, name: 'Product A', quantity: 10, price: 20 },
    { id: 2, name: 'Product B', quantity: 5, price: 15 },
    { id: 3, name: 'Product C', quantity: 20, price: 30 },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto bg-red-50 p-5">
        <h1 className="text-2xl font-semibold mb-4">Add a Product</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2">
              Product Slug
            </label>
            <input
              type="text"
              id="productName"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter price"
            />
          </div>
          <button onClick={addProduct}
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none"
          >
            Add Product
          </button>
        </form>
      </div>

      <div className="container mx-auto bg-red-50 p-5 mt-5">
        <h1 className="text-2xl font-semibold mb-4">Search a Product</h1>
        <div className="mb-4">
          <label htmlFor="searchProduct" className="block mb-2">
            Category
          </label>
          <select
            id="searchCategory"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-indigo-500"
          >
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
      </div>

      {/* Display current stock */}
      <div className="container mx-auto bg-green-50 p-5 mt-5">
        <h2 className="text-xl font-semibold mb-2">Current Stock</h2>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Product Name</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.id}</td>
                <td className="border border-gray-300 p-2">{item.name}</td>
                <td className="border border-gray-300 p-2">{item.quantity}</td>
                <td className="border border-gray-300 p-2">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
