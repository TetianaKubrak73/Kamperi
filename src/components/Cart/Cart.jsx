import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/FavoriteSlice";
import { selectFavorite } from "../../redux/selectors";
import css from "./Cart.module.css";
import sprite from "../../image/sprite.svg";
import Modal from "../Modal/Modal";

const Cart = ({
  name,
  price,
  rating,
  reviews,
  location,
  description,
  gallery,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);
  const isFavorite = favorites.some((item) => item.name === name);
  const [visibleModal, setVisibleModal] = useState(false);
  const showDescription =
    description.length > 100 ? description.slice(0, 100) + "..." : description;
  const cartDetails = {
    name,
    price,
    rating,
    reviews,
    location,
    description,
    gallery,
  };
  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(cartDetails));
      console.log("Removed from favorites:", cartDetails);
    } else {
      dispatch(addFavorite(cartDetails));
      console.log("Added to favorites:", cartDetails);
    }
    console.log("Current favorites:", favorites);
  };
  useEffect(() => {
    console.log("Updated favorites:", favorites);
  }, [favorites]);
  return (
    <div className={css.cartDiv}>
      <img className={css.cartImage} src={gallery[0]} alt={name} />
      <div className={css.cartWrap}>
        <div className={css.cartContainer}>
          <h2 className={css.cartTitle}>{name}</h2>
          <p className={css.cartPrice}>€{price}</p>
          <svg className={css.iconFavorite} onClick={handleFavoriteClick}>
            <use
              href={`${sprite}#${
                isFavorite ? "favorite=pressed" : "favorite=default"
              }`}
            />
          </svg>
        </div>
        <div className={css.cartRatingContainer}>
          <svg className={css.iconStar}>
            <use href={`${sprite}#star`} />
          </svg>
          <p className={css.cartRating}>
            {rating} ({reviews.length} Reviews)
          </p>
          <svg className={css.iconLocation}>
            <use href={`${sprite}#map-pin`} />
          </svg>
          <p className={css.cartLocation}>{location}</p>
        </div>
        <p className={css.cartText}>{showDescription}</p>
        <div className={css.cartCategories}></div>
        <button
          className={css.cartButton}
          type="button"
          onClick={() => setVisibleModal(true)}
        >
          Show more
        </button>
        <Modal
          isOpen={visibleModal}
          onClose={() => setVisibleModal(false)}
          {...cartDetails}
        ></Modal>
      </div>
    </div>
  );
};
export default Cart;
