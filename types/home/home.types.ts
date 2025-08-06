import { Dispatch, SetStateAction } from "react";
import { TagStatus } from "../ui/ui.types";

export type SearchAndFilterProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  openFiltersSheet: () => void;
};

export type Shipment = {
  awb: string;
  origin: {
    city: string;
    address: string;
  };
  destination: {
    city: string;
    address: string;
  };
  status: TagStatus;
};

export type ShipmentCardProps = {
  index: number;
  shipment: Shipment;
  checked: boolean;
  onToggleChecked: () => void;
};
