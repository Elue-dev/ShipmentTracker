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
      city: "Tanta",
      address: "El Geish St. City Center",
    },
    status: "received",
  },
  {
    awb: "41785691424",
    origin: {
      city: "Giza",
      address: "Mohandessin, 5 Tahrir St.",
    },
    destination: {
      city: "Ismailia",
      address: "El Shohada St., Zone 2",
    },
    status: "cancelled",
  },
  {
    awb: "41785691425",
    origin: {
      city: "Luxor",
      address: "Karnak St. Luxor Temple",
    },
    destination: {
      city: "Aswan",
      address: "Corniche El Nil. Old Cataract",
    },
    status: "delivered",
  },
  {
    awb: "41785691426",
    origin: {
      city: "Port Said",
      address: "Al Gomhoria St. Fouad",
    },
    destination: {
      city: "Mansoura",
      address: "El Toriel St. Mashaya",
    },
    status: "lost",
  },
  {
    awb: "41785691427",
    origin: {
      city: "Fayoum",
      address: "El Sawaqi St., Downtown",
    },
    destination: {
      city: "Zagazig",
      address: "El Galaa St.",
    },
    status: "received",
  },
  {
    awb: "41725691538",
    origin: {
      city: "Cairo",
      address: "15 Tahrir Square, Cairo",
    },
    destination: {
      city: "Alexandria",
      address: "22 Corniche Road, Mansheya",
    },
    status: "on hold",
  },
];
