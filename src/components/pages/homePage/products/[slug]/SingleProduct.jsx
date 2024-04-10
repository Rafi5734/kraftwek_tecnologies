import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../../api/productApi/productSlice";
import { Blocks } from "react-loader-spinner";
import "swiper/css";
const SingleProduct = () => {
  const id = useParams();
  const productId = id?.productId;
  const { data: singleProduct, isLoading } =
    useGetSingleProductQuery(productId);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  console.log("Single Product", singleProduct?.images);
  return (
    <div>
      <p className="text-center text-4xl mt-8 header_title underline underline-offset-8 text-[#f35627]">
        Product Details
      </p>
      {isLoading ? (
        <div className="flex justify-center items-center mt-10">
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperclassName="blocks-wrapper"
            visible={true}
          />
        </div>
      ) : (
        <div className="ms-3 me-3 mt-10">
          <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div>
                    <div
                      className="rounded-lg bg-gray-300 dark:bg-gray-700 mb-4"
                      style={{ marginTop: "20px" }}
                    >
                      {selectedImage && (
                        <div>
                          <img
                            src={selectedImage}
                            alt="Selected Image"
                            // style={{ maxWidth: "300px" }}
                            className="w-full h-full"
                          />
                        </div>
                      )}
                      {!selectedImage && (
                        <div>
                          <img
                            src={singleProduct?.thumbnail}
                            alt="Selected Image"
                            // style={{ maxWidth: "300px" }}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="mt-3 mb-5"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {singleProduct?.images?.map((imageUrl, index) => (
                      <img
                        className="mt-3"
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(imageUrl)}
                      />
                    ))}
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {singleProduct?.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {singleProduct?.description}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ms-2">
                        ${singleProduct?.price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ms-2">
                        {singleProduct?.stock}
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Discount Percentage:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ms-2">
                      {singleProduct?.discountPercentage}%
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Color:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Size:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        S
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        M
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        L
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XL
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XXL
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {singleProduct?.description}
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Category:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {singleProduct?.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
