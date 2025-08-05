import { LoginFields } from "@/types/auth/auth.types";
import { httpRequest, isTimeoutError } from "../index";

export const AuthService = {
  async login({ identifier, password }: LoginFields) {
    try {
      const response = await httpRequest.post("/login", {
        usr: identifier,
        pwd: password,
      });

      return { response: response.data.data, error: null };
    } catch (error: any) {
      return {
        response: null,
        error: isTimeoutError(error)
          ? "Network timed out. Please try again"
          : error.response?.data?.error,
      };
    }
  },
};
