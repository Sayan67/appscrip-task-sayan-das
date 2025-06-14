"use client";
import React from "react";
import FilterSidebar from "../FiltersSidebar/FiltersSidebar";
import styles from "./maincontent.module.css";
import { useAtom } from "jotai";
import { filteraSidebarAtom } from "@/store/filters";
import Products from "../Products/Products";

function MainContent() {
  const [filterSidebar, setFilterSidebar] = useAtom(filteraSidebarAtom);

  return (
    <div className={styles.productsContainer}>
      {filterSidebar && <FilterSidebar />}
      <Products />
    </div>
  );
}

export default MainContent;
