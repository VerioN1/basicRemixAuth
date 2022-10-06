import type { AxiosError } from "axios";
import axios from "axios";

import type { LoginResponse } from "~/types/user";

export const authServer = axios.create({
  baseURL: "https://auth.varcode.com"
});

export async function verifyLogin(
  email: string,
  password: string
) {
  try {
    const { data } = await authServer.post("/user/login", {
      email,
      password
    });
    return data as LoginResponse;
  } catch ({response}) {
    const { status } = response as AxiosError
    console.log(status);
    return null;
  }

}
