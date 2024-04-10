import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useGetProductsQuery } from "../../../../api/productApi/productSlice";
import { CirclesWithBar } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Products = () => {
  const [active, setActive] = React.useState(1);

  const limit = 10;
  const { data: productData, isLoading } = useGetProductsQuery({
    limit,
    skip: (active - 1) * 10,
  });

  const next = () => {
    if (active === productData?.total) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="ms-3 me-3 mt-14">
      <p className="text-center header_title text-5xl">On sale, only today</p>
      <p className="text-lg text-center mt-3">Get it while they last!</p>

      <div>
        {productData?.products?.length ? (
          <>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <CirclesWithBar
                  height="100"
                  width="100"
                  color="#4fa94d"
                  outerCircleColor="#4fa94d"
                  innerCircleColor="#4fa94d"
                  barColor="#4fa94d"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-3 mt-20">
                {productData?.products?.map((product, index) => (
                  <Card
                    key={index}
                    className="w-full max-w-full shadow-lg mb-8"
                  >
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src={product?.thumbnail}
                        alt="ui/ux review check"
                        // style={{height: "300px"}}
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                      >
                        <p className="bg-white p-1 rounded">
                          {product?.discountPercentage}%
                        </p>
                      </IconButton>
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {product?.title}
                        </Typography>
                        <Typography
                          color="blue-gray"
                          className="flex items-center gap-1.5 font-normal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {Math.round(product?.rating)}
                        </Typography>
                      </div>
                      <Typography color="gray">
                        {product?.description
                          ?.split(" ")
                          .slice(0, 10)
                          .join(" ") + " ..."}
                      </Typography>
                      <div className="group flex flex-wrap justify-between items-center mt-3">
                        <div className="flex">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                          <p>{product?.price}</p>
                        </div>
                        <div className="flex">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 192 192"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <g fill="none">
                                {" "}
                                <path
                                  d="M22 142.576h10.702M22 114.712h10.702M22 22v148h148M21.995 32.934h10.702m-10.702 27.32h10.702M21.995 87.356h10.702"
                                  style={{
                                    fill: "#000000",
                                    fillOpacity: 0,
                                    stroke: "#000000",
                                    strokeWidth: 12,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 6,
                                    strokeDasharray: "none",
                                    paintOrder: "stroke fill markers",
                                  }}
                                  fill="none"
                                ></path>{" "}
                                <path
                                  d="M68.842 128.695a10.782 10.782 0 0 1-10.781 10.781 10.782 10.782 0 0 1-10.782-10.781 10.782 10.782 0 0 1 10.782-10.782 10.782 10.782 0 0 1 10.781 10.782zM95.06 76.358A10.782 10.782 0 0 1 84.277 87.14a10.782 10.782 0 0 1-10.782-10.782 10.782 10.782 0 0 1 10.782-10.782 10.782 10.782 0 0 1 10.781 10.782Zm43.576 36.396a10.782 10.782 0 0 1-10.782 10.781 10.782 10.782 0 0 1-10.781-10.781 10.782 10.782 0 0 1 10.781-10.782 10.782 10.782 0 0 1 10.782 10.782zm21.604-73.396a10.782 10.782 0 0 1-10.782 10.782 10.782 10.782 0 0 1-10.782-10.782 10.782 10.782 0 0 1 10.782-10.781 10.782 10.782 0 0 1 10.781 10.781z"
                                  style={{
                                    fillOpacity: 0,
                                    stroke: "#000000",
                                    strokeWidth: 12,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 6,
                                    paintOrder: "stroke fill markers",
                                  }}
                                ></path>{" "}
                                <path
                                  d="m64.38 118.198 14.117-31.362m15.08-2.424 24.333 21.124m13.668-4.067 15.53-52.393"
                                  style={{
                                    fill: "#000000",
                                    fillOpacity: 0,
                                    stroke: "#000000",
                                    strokeWidth: 8,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 6,
                                    strokeDasharray: "none",
                                    paintOrder: "stroke fill markers",
                                  }}
                                  fill="none"
                                ></path>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                          <p className="ms-2">{product?.stock}</p>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="">
                      <Link to={`/products/${product?.id}`}>
                        <Button
                          size="lg"
                          fullWidth={true}
                        >
                          Place Order
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
            <div className="flex items-center justify-center mb-10 gap-8">
              <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 7L10 12L15 17"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </IconButton>
              <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> of{" "}
                <strong className="text-gray-900">
                  {productData?.total / limit}
                </strong>
              </Typography>
              <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === productData?.total / limit}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M10 7L15 12L10 17"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </IconButton>
            </div>
          </>
        ) : (
          <>No Product Found</>
        )}
      </div>
    </div>
  );
};

export default Products;
