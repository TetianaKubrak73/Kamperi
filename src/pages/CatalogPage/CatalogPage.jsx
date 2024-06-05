import React from "react";
import campers from "../../campers.json";
import Catalog from "../../components/Catalog/Catalog";

const CatalogPage = () => {
  return (
    <div>
      <Catalog carts={campers} />
    </div>
  );
};
export default CatalogPage;
