
import "./collection.css";
import { IconButton } from "@material-tailwind/react";
const Collections = () => {
  return (
    <div className="ms-3 me-3 mt-14">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="ms-5">
          <p className="header_title text-5xl">Trending Elyssi Collections</p>
          <p className="mt-5 text-xl mb-10">
            Checkout our newest trends this coming season
          </p>
        </div>
        <div className="collection_section_1 p-10">
          <p className="header_title text-3xl">Passion Pearl</p>
          <p className="header_title text-3xl mt-2">Collection</p>
          <button className="mt-8 flex justify-center items-center">
            <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
              
            </IconButton>
            <p className="ms-5 text-[#f35627]">Get it now</p>
          </button>
        </div>
        <div className="collection_section_2 p-10">
          <p className="header_title text-3xl">Hoodie your way!</p>
          <p className="header_title text-3xl mt-2"> For Men</p>
          <button className="mt-8 flex justify-center items-center">
            <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
              
            </IconButton>
            <p className="ms-5 text-[#f35627]">Get it now</p>
          </button>
        </div>
        <div className="collection_section_3 p-10">
          <p className="header_title text-3xl">Anabelle Purses </p>
          <p className="header_title text-3xl mt-2">by Elyssi</p>
          <button className="mt-8 flex justify-center items-center">
            <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
              
            </IconButton>
            <p className="ms-5 text-[#f35627]">Get it now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
