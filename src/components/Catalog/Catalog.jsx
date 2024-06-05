import React, { useState } from "react";
import css from "./Catalog.module.css";

import Cart from "../../components/Cart/Cart";
import Filter from "../Filter/Filter";

const Catalog = ({ carts }) => {
  const [visibleCarts, setVisibleCarts] = useState(4);
  const handleLoadMore = () => {
    setVisibleCarts((prevVisibleCarts) => prevVisibleCarts + 4);
  };
  return (
    <div className={css.catalogContainer}>
      <Filter />
      <div className={css.catalogDiv}>
        {carts.slice(0, visibleCarts).map((cart) => (
          <Cart
            key={cart._id}
            name={cart.name}
            price={cart.price}
            rating={cart.rating}
            reviews={cart.reviews}
            location={cart.location}
            description={cart.description}
            gallery={cart.gallery}
          />
        ))}
        {visibleCarts < carts.length && (
          <button
            className={css.catalogButton}
            type="button"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};
export default Catalog;
