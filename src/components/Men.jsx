import React, { useContext } from "react";
import ProductContainer from "./ProductContainer";
import { AppContext } from "../App";

const Men = () => {
  const { items } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col md:gap-10 w-full md:grid grid-cols-2 justify-center">
        <div></div>
        <div>
          <ProductContainer index={0} />
        </div>
      </div>
    </>
  );
};

export default Men;
