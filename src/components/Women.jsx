import React from "react";
import ProductContainer from "./ProductContainer";
import PictureHandler from "./PictureHandler";

const Women = ({ item }) => {
  return (
    <>
      <div className="flex flex-col md:gap-10 w-full md:grid grid-cols-2 justify-center">
        <div className="flex items-center justify-center flex-wrap content-center">
          <PictureHandler index={1} />
        </div>
        <div className="flex flex-col gap-2.5 md:gap-4 justify-center items-start">
          <ProductContainer index={1} />
        </div>
      </div>
    </>
  );
};

export default Women;
