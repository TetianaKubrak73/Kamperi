import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout.jsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() =>
  import("./pages/FavoritePage/FavoritesPage.jsx")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
