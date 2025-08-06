import { SHIPMENTS } from "@/data/shipment";
import { Shipment } from "@/types/home/home.types";
import { TagStatus } from "@/types/ui/ui.types";
import { create } from "zustand";

type DefaultState = {
  shipments: Shipment[];
  filteredShipments: Shipment[];
  applyFilters: (statuses: TagStatus[]) => void;
  resetFilters: () => void;
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
}));
