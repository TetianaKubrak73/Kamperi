import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Header.module.css";
import Loader from "../Loader/Loader";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleClick = () => setLoading(false);

    handleClick();

    window.addEventListener("popstate", handleClick);

    return () => {
      window.removeEventListener("popstate", handleClick);
    };
  }, [location]);

  return (
    <header className={css.headerDiv}>
      <nav className={css.headerList}>
        {loading && <Loader />}
        <h1 className={css.headerTitle}>Campers rental</h1>
        <ul className={css.headerList}>
          <li className={css.headerItem}>
            <Link to="/" onClick={() => setLoading(true)}>
              Home
            </Link>
          </li>
          <li className={css.headerItem}>
            <Link to="/catalog" onClick={() => setLoading(true)}>
              Catalog
            </Link>
          </li>
          <li className={css.headerItem}>
            <Link to="/favorites" onClick={() => setLoading(true)}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
