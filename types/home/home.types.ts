import { Dispatch, SetStateAction } from "react";

export type SearchAndFilterProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
