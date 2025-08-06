import { SHIPMENTS } from "@/data/shipment";
import { Shipment } from "@/types/home/home.types";
import { TagStatus } from "@/types/ui/ui.types";
import { create } from "zustand";

type DefaultState = {
  shipments: Shipment[];
  filteredShipments: Shipment[];
  applyFilters: (statuses: TagStatus[]) => void;
  resetFilters: () => void;
  filterShipments: (query: string, statuses: TagStatus[]) => void;
};

export const useShipmentStore = create<DefaultState>((set, get) => ({
  shipments: SHIPMENTS,
  filteredShipments: [],
  applyFilters: (statuses) => {
    const allShipments = get().shipments;
    const filtered = allShipments.filter((s) => statuses.includes(s.status));
    set({ filteredShipments: filtered });
  },
  resetFilters: () => {
    set({ filteredShipments: get().shipments });
  },
  filterShipments: (query, statuses) => {
    const allShipments = get().shipments;
    const searchQueryToLower = query.toLowerCase();

    const filtered = allShipments.filter((s) => {
      const matchesQuery =
        s.awb.toLowerCase().includes(searchQueryToLower) ||
        s.origin.city.toLowerCase().includes(searchQueryToLower) ||
        s.destination.city.toLowerCase().includes(searchQueryToLower) ||
        s.status.toLowerCase().includes(searchQueryToLower);

      const matchesStatus =
        statuses.length === 0 ? true : statuses.includes(s.status);

      return matchesQuery && matchesStatus;
    });

    set({ filteredShipments: filtered });
  },
}));
