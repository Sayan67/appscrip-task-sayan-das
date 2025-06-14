"use client";

import { useAtom } from "jotai";
import { filtersAtom } from "@/store/filters";
import styles from "./filtersSidebar.module.css";
import { useState } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";

const IDEAL_FOR = ["Men", "Women", "Baby & Kids"];

export default function FilterSidebar() {
  const [filters, setFilters] = useAtom(filtersAtom);
  const [idealForOpen, setIdealForOpen] = useState(true);
  const [idealForSelected, setIdealForSelected] = useState<string[]>([]);

  const toggleCustomisable = () => {
    setFilters({
      ...filters,
      customisable: !filters.customisable,
    });
  };

  const toggleIdealFor = (item: string) => {
    const newSelection = idealForSelected.includes(item)
      ? idealForSelected.filter((i) => i !== item)
      : [...idealForSelected, item];
    setIdealForSelected(newSelection);
  };

  const unselectAll = () => setIdealForSelected([]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <label className={styles.customisableLabel}>
          <input
            type="checkbox"
            checked={filters.customisable}
            onChange={toggleCustomisable}
          />
          <span>CUSTOMIZBLE</span>
        </label>
      </div>

      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => setIdealForOpen(!idealForOpen)}
        >
          <strong>IDEAL FOR</strong>
          <span>{idealForOpen ? <ArrowUp2 /> : <ArrowDown2 />}</span>
        </div>

        {idealForOpen && (
          <div className={styles.dropdown}>
            <p>All</p>
            <p onClick={unselectAll} className={styles.unselect}>
              Unselect all
            </p>
            {IDEAL_FOR.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={idealForSelected.includes(item)}
                  onChange={() => toggleIdealFor(item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>

      {[
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN",
      ].map((title) => (
        <div className={styles.filterSection} key={title}>
          <div className={styles.filterHeader}>
            <strong>{title}</strong>
            <span>
              <ArrowDown2 />
            </span>
          </div>
          <p className={styles.subText}>All</p>
          {/* <hr /> */}
        </div>
      ))}
    </div>
  );
}
