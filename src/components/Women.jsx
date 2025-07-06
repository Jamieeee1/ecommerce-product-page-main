import React from "react";
import ProductContainer from "./ProductContainer";

const Women = ({ item }) => {
  return (
    <>
      <div className="flex flex-col md:gap-10 w-full md:grid grid-cols-2 justify-center">
        <div></div>
        <div>
          <ProductContainer index={1} />
        </div>
      </div>
    </>
  );
};

export default Women;
