import React from "react";

const Home = () => {
  return (
    <section
      id="Home"
      className="w-full h-[calc(100vh-90px)] relative col-around"
    >
      <div className="flex flex-col gap-2 md:w-[50%] lg:w-[60%]">
        <h1 className="font-semibold text-[32px] md:text-[64px] lg:text-[128px] text-left">
          Digital{" "}
        </h1>
        <h1 className="font-semibold text-[32px] md:text-[64px] lg:text-[128px] text-right">
          Brilliance.
        </h1>
      </div>
      <span className="font-semibold text-base md:text-lg lg:text-xl w-full px-[50px] md:px-[100px] lg:px-[150px]">Websites • Digital Marketing • Design</span>
    </section>
  );
};

export default Home;
