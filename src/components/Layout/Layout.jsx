import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import styles from "./Layout.module.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <div className={styles.box}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
