import { atom } from "jotai";

export const filteraSidebarAtom = atom<boolean>(false);
export type sortingType =
  | "RECOMMENDED"
  | "PRICE_LOW_TO_HIGH"
  | "PRICE_HIGH_TO_LOW"
  | "NEWEST";

export const filtersAtom = atom<{
  sorting: { name: sortingType; open: boolean };
  customisable: boolean;
}>({
  sorting: {
    name: "RECOMMENDED",
    open: false,
  },
  customisable: false,
});
