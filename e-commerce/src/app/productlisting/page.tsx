import Image from "next/image";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import NotificationBar from "../components/topnav";
import Navbar from "../components/navbar";
import Pnavbar from "../components/productnav";

const ProductListing = () => {
  const features = [
    {
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
      icon: TbTruckDelivery,
    },
    {
      title: "Made by true artisans",
      description: "Hand-crafted goods made with real passion and craftsmanship.",
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: "Unbeatable prices",
      description: "For our material and quality, you won’t find better prices anywhere.",
      icon: MdOutlinePriceChange,
    },
    {
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable.",
      icon: LuSprout,
    },
  ];

  return (
    
    <><NotificationBar/>
    <Pnavbar />
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={"/images/Image Left.png"}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col">
              <p className="text-xl md:text-2xl font-semibold text-center md:text-left">
                The Dandy Chair
              </p>
              <p className="py-2 text-lg md:text-xl text-center md:text-left">$250</p>

              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold text-center md:text-left">
                  Product description
                </h1>
                <p className="my-4 md:my-6 text-center md:text-left">
                  A timeless design, with premium materials features as one of our most popular and
                  iconic pieces. The dandy chair is perfect for any stylish living space with beech
                  legs and lambskin leather upholstery.
                </p>

                <ul className="list-disc space-y-1 ml-6 md:ml-4 text-center md:text-left">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>

                {/* Dimensions */}
                <div className="my-8">
                  <h1 className="font-semibold text-center md:text-left">Dimensions</h1>
                  <div className="flex flex-col md:flex-row gap-6 mt-4 justify-between text-center md:text-left">
                    <div>
                      <h1 className="font-medium">Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1 className="font-medium">Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1 className="font-medium">Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-wrap justify-between items-center mt-8">
                  <div className="flex items-center gap-4">
                    <h1 className="font-medium">Quantity:</h1>
                    <div className="flex gap-2 items-center bg-[#F5F5F5] rounded-md px-4 py-2">
                      <span className="text-gray-500 cursor-pointer">-</span>
                      <span>1</span>
                      <span className="text-gray-500 cursor-pointer">+</span>
                    </div>
                  </div>
                  <button className="w-full md:w-auto mt-4 md:mt-0 bg-[#2A254B] text-white px-6 py-3 rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977] text-center md:text-left">
            You might also like
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {["chair", "vase", "silky", "lamp"].map((item, idx) => (
              <div key={idx} className="w-full">
                <Image
                  src={`/images/${item}.png`}
                  height={700}
                  width={700}
                  alt={item}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="mt-4 text-center">
                  <p className="py-2">{item === "chair" ? "The Dendy Chair" : `The ${item}`}</p>
                  <p>
                    ${item === "chair" ? 250 : item === "vase" ? 155 : 125}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </button>
          </div>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center md:items-start md:w-1/4 p-4 rounded-lg"
                >
                  <Icon size={30} className="text-[#2A254B]" />
                  <p className="py-4 font-semibold text-center md:text-left">
                    {feature.title}
                  </p>
                  <p className="text-center md:text-left">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section>
        <div className="py-12 bg-[#F9F9F9] text-[#2A254B] mt-12">
          <div className="w-full max-w-lg md:max-w-4xl mx-auto flex flex-col items-center px-4 text-center">
            <h1 className="text-2xl md:text-4xl">
              Join the club and get the benefits
            </h1>
            <h2 className="py-4 text-sm md:text-base">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up
              stores, and more.
            </h2>
            <form
              action=""
              className="flex flex-col md:flex-row items-center w-full mt-4 gap-4"
            >
              <input
                type="text"
                placeholder="your@email.com"
                className="p-4 bg-white w-full md:w-auto md:flex-1 h-14 outline-none rounded-md"
              />
              <button className="p-4 bg-[#2A254B] text-white rounded-md">
                Signup
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
