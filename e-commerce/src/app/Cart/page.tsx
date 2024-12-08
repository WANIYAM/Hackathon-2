import React from "react";

const Cart = () => {
  return (
    <div className="bg-white w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 text-[#2A254B]">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
        Your shopping cart
      </h1>

      {/* Cart Items Section */}
      <div className="mt-8">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead>
            <tr className="border-b text-sm sm:text-base">
              <th className="py-4">Product</th>
              <th className="py-4 text-center">Quantity</th>
              <th className="py-4 text-right">Total</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* First Product */}
            <tr className="border-b">
              <td className="py-6 flex items-center">
                <img
                  src="/images/Product Image.png"
                  alt="Graystone Vase"
                  className="w-20 h-20 sm:w-28 sm:h-28 mr-6 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div>
                  <h2 className="text-base sm:text-lg font-medium">
                    Graystone vase
                  </h2>
                  <p className="text-sm text-[#505977]">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="mt-2 text-lg font-semibold">£85</p>
                </div>
              </td>
              <td className="py-6 text-center">
                <div className="flex items-center justify-center">
                  <button className="px-2 text-lg">-</button>
                  <span className="px-4">1</span>
                  <button className="px-2 text-lg">+</button>
                </div>
              </td>
              <td className="py-6 text-right text-lg font-medium">£85</td>
            </tr>

            {/* Second Product */}
            <tr>
              <td className="py-6 flex items-center">
                <img
                  src="/images/Product Image 2.png"
                  alt="Basic White Vase"
                  className="w-20 h-20 sm:w-28 sm:h-28 mr-6 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div>
                  <h2 className="text-base sm:text-lg font-medium">
                    Basic white vase
                  </h2>
                  <p className="text-sm text-[#505977]">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="mt-2 text-lg font-semibold">£125</p>
                </div>
              </td>
              <td className="py-6 text-center">
                <div className="flex items-center justify-center">
                  <button className="px-2 text-lg">-</button>
                  <span className="px-4">1</span>
                  <button className="px-2 text-lg">+</button>
                </div>
              </td>
              <td className="py-6 text-right text-lg font-medium">£125</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Subtotal Section */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center sm:items-end">
        <div className="text-sm text-[#505977]">
          {/* <p>Taxes and shipping are calculated at checkout</p> */}
        </div>
        <div className="text-right mt-6 sm:mt-0">
          <h2 className="text-lg sm:text-xl font-medium">Subtotal</h2>
          <p className="text-xl sm:text-2xl font-semibold mt-2">£210</p>
          <button className="bg-[#2A254B] text-white w-full sm:w-auto px-8 py-3 rounded-md mt-4">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
