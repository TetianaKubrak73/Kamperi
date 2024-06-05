import css from "./Modal.module.css";
import sprite from "../../image/sprite.svg";
import { useEffect } from "react";

function Modal({
  isOpen,
  onClose,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  gallery,
}) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modalContent}>
        <div className={css.titleContainer}>
          <h2 className={css.cartTitle}>{name}</h2>
          <button onClick={onClose}>
            <svg className={css.iconClose}>
              <use href={`${sprite}#close`} />
            </svg>
          </button>
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
        <p className={css.cartPrice}>€{price}</p>
        <div className={css.containerImage}>
          {gallery.map((image, index) => (
            <img
              key={index}
              className={css.cartImage}
              src={image}
              alt={`${name} ${index}`}
            />
          ))}
        </div>
        <p className={css.cartText}>{description}</p>
      </div>
    </div>
  );
}

export default Modal;
