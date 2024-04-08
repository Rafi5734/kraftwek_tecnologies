const SubHeroSection = () => {
  return (
    <div className="p-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="flex flex-row border-r-4 border-[#ffe8d9]">
          <img
            className="h-12 w-12 object-contain object-center"
            src="https://elyssi.redpixelthemes.com/assets/img/icons/icon-shipping.svg"
            alt="free-shipping-img"
          />
          <div className="ms-5 ">
            <p className="text-2xl text-[#ea572b]">Free shipping</p>
            <p>On all orders over $30</p>
          </div>
        </div>
        <div className="flex flex-row border-r-4 border-[#ffe8d9]">
          <img
            className="h-12 w-12 object-contain object-center"
            src="https://elyssi.redpixelthemes.com/assets/img/icons/icon-support.svg"
            alt="free-shipping-img"
          />
          <div className="ms-5 ">
            <p className="text-2xl text-[#ea572b]">Always available</p>
            <p>24/7 call center available</p>
          </div>
        </div>
        <div className="flex flex-row border-r-4 border-[#ffe8d9]">
          <img
            className="h-12 w-12 object-contain object-center"
            src="https://elyssi.redpixelthemes.com/assets/img/icons/icon-return.svg"
            alt="free-shipping-img"
          />
          <div className="ms-5 ">
            <p className="text-2xl text-[#ea572b]">Free returns</p>
            <p>30 days free return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
