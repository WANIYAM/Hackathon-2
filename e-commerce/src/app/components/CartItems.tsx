import React from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

const ShoppingCart: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a bit color grey glaze.",
      price: 85,
      quantity: 1,
      image: "/images/cart_1.png"
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple; this is one for the classics.",
      price: 125,
      quantity: 1,
      image: "/images/cart_2.png", // Ensure this path is correct
    },
  ];

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center" style={{ width: '1440px', height: '749px', opacity: 0 }}>
      <div className="container mx-auto px-4">
        {/* Grid Wrapper */}
        <div className="grid grid-cols-12 gap-0"> {/* Set gap to 0 */}
          {/* Title */}
          <h1 className="col-span-12 text-2xl font-bold mb-6 text-center">Your shopping cart</h1>

          {/* Table Header */}
          <div className="col-span-6 font-medium text-gray-700 text-center">Product</div>
          <div className="col-span-3 font-medium text-gray-700 text-center">Quantity</div>
          <div className="col-span-3 font-medium text-gray-700 text-center">Total</div>

          {/* Product Rows */}
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <div className="col-span-6 flex items-center gap-4 py-4 border-b justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-medium text-gray-900">{product.name}</h2>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <p className="text-gray-900 font-semibold">£{product.price}</p>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-center py-4 border-b">
                <span style={{ color: '#EBE8F4' }}>-</span> {/* Set color to #EBE8F4 for "-" */}
                <span className="mx-1">{product.quantity}</span> {/* Quantity in default color */}
                <span style={{ color: '#EBE8F4' }}>+</span> {/* Set color to #EBE8F4 for "+" */}
              </div>
              <div className="col-span-3 flex items-center justify-center py-4 border-b font-semibold text-gray-900">
                £{product.price * product.quantity}
              </div>
            </React.Fragment>
          ))}

          {/* Summary Section */}
          <div className="col-span-6"></div>
          <div className="col-span-6 text-right">
            <p className="font-medium text-gray-700">
              Subtotal: <span className="font-bold text-gray-900">£{subtotal}</span>
            </p>
            <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;