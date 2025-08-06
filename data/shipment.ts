import { Shipment } from "@/types/home/home.types";
import { TagStatus } from "@/types/ui/ui.types";

export const TAGS: TagStatus[] = [
  "received",
  "putaway",
  "delivered",
  "cancelled",
  "rejected",
  "lost",
  "on hold",
];

export const SHIPMENTS: Shipment[] = [
  {
    awb: "41785691423",
    origin: {
      city: "Cairo",
      address: "Dokki, 22 Nile St.",
    },
    destination: {
      city: "Alexandria",
      address: "Smoha, 22 max St.",
    },
    status: "received",
  },
  {
    awb: "41785691424",
    origin: {
      city: "Cairo",
      address: "Nasr City, 10 Abbas St.",
    },
    destination: {
      city: "Giza",
      address: "Mohandessin, 5 Tahrir St.",
    },
    status: "cancelled",
  },
  {
    awb: "41785691425",
    origin: {
      city: "Cairo",
      address: "Heliopolis, 3 Merghany St.",
    },
    destination: {
      city: "Alexandria",
      address: "Gleem, 15 Corniche Rd.",
    },
    status: "delivered",
  },
  {
    awb: "41785691426",
    origin: {
      city: "Cairo",
      address: "Maadi, 8 Road 9",
    },
    destination: {
      city: "Alexandria",
      address: "Stanley, 11 Beach Rd.",
    },
    status: "lost",
  },
  {
    awb: "41785691427",
    origin: {
      city: "Cairo",
      address: "New Cairo, 90th St.",
    },
    destination: {
      city: "Alexandria",
      address: "Miami, 7 Palm St.",
    },
    status: "received",
  },
];
