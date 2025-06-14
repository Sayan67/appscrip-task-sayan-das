"use client";
import React from "react";
import styles from "./filtersbar.module.css";
import { ArrowDown2, ArrowLeft2, ArrowRight2, ArrowUp2 } from "iconsax-reactjs";
import { useAtom } from "jotai";
import { filteraSidebarAtom, filtersAtom, sortingType } from "@/store/filters";
import Image from "next/image";

const sortingOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : LOW TO HIGH",
  "PRICE : HIGH TO LOW",
];

function FiltersBar() {
  const [filterSidebar, setFilterSidebar] = useAtom(filteraSidebarAtom);
  const [filters, setFilters] = useAtom(filtersAtom);

  return (
    <div className={styles.filtersbarContainer}>
      <div className={styles.filterLeftContainer}>
        <h3>{3425} ITEMS</h3>
        <div
          onClick={() => setFilterSidebar(!filterSidebar)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            textDecoration: "underline",
            cursor: "pointer",
            color: "var(--text-muted)",
          }}
          className={styles.filterToggleButton}
        >
          <div>
            {filterSidebar ? (
              <ArrowLeft2 size="16" />
            ) : (
              <ArrowRight2 size="16" />
            )}
          </div>
          {filterSidebar ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
      </div>
      <div className={styles.divider}></div>

      <div className={styles.sortingContainer}>
        <div
          onClick={() =>
            setFilters({
              ...filters,
              sorting: { ...filters.sorting, open: !filters.sorting.open },
            })
          }
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            padding: "1rem 1rem",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          {filters.sorting.name}
          <span className={styles.sortingArrow}>
            {filters.sorting.open ? (
              <ArrowUp2 size="16" />
            ) : (
              <ArrowDown2 size="16" />
            )}
          </span>
        </div>
        {filters.sorting.open && (
          <div className={styles.sortingOptionsContainer}>
            {sortingOptions.map((option) => (
              <div
                key={option}
                className={`${styles.sortingOption} ${
                  filters.sorting.name === option && styles.active
                }`}
                onClick={() =>
                  setFilters({
                    ...filters,
                    sorting: { name: option as sortingType, open: false },
                  })
                }
              >
                {filters.sorting.name === option && styles.active && (
                  <Image
                    src="/icons/check.svg"
                    alt="check icon"
                    width={20}
                    height={20}
                  />
                )}
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FiltersBar;
