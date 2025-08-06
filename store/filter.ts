import { TagStatus } from "@/types/ui/ui.types";
import { create } from "zustand";

type DefaultState = {
  selectedFilters: TagStatus[];
  toggleFilter: (tag: TagStatus) => void;
  filtersUpdated: boolean;
  setFiltersUpdated: (value: boolean) => void;
};

export const useFilterStore = create<DefaultState>((set) => ({
  selectedFilters: [],
  toggleFilter: (tag) =>
    set((state) => {
      const isSelected = state.selectedFilters.includes(tag);
      return {
        selectedFilters: isSelected
          ? state.selectedFilters.filter((t) => t !== tag)
          : [...state.selectedFilters, tag],
      };
    }),
  filtersUpdated: false,
  setFiltersUpdated: (value) => set({ filtersUpdated: value }),
}));
