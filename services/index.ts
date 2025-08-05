import { SERVER_URL } from "@/constants";
import axios from "axios";

export const httpRequest = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
});

export function isTimeoutError(error: any) {
  return error.code === "ECONNABORTED";
}
