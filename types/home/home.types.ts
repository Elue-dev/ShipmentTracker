import { Dispatch, SetStateAction } from "react";
import { TagStatus } from "../ui/ui.types";

export type SearchAndFilterProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
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
  shipment: Shipment;
  checked: boolean;
  onToggleChecked: () => void;
};
