import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors";
import css from "./Favorites.module.css";
import Cart from "../Cart/Cart";

const Favorites = () => {
  const favorite = useSelector(selectFavorite);
  return (
    <div className={css.favoritesDiv}>
      {favorite.map((item) => (
        <Cart key={item.name} {...item} />
      ))}
    </div>
  );
};

export default Favorites;
