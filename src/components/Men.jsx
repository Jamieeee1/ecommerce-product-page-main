import React, { useContext } from "react";
import ProductContainer from "./ProductContainer";
import { AppContext } from "../App";
import PictureHandler from "./PictureHandler";

const Men = () => {
  return (
    <>
      <div className="flex flex-col gap-2.5 md:gap-4 w-full md:grid grid-cols-2 justify-center">
        <div className="flex items-center justify-center flex-wrap content-center">
          <PictureHandler index={0} />
        </div>
        <div className="flex flex-col gap-2.5 md:gap-4 justify-center items-start">
          <ProductContainer index={0} />
        </div>
      </div>
    </>
  );
};

export default Men;
