import { Token } from "@/interfaces/Token";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getTokens = async (token: string): Promise<AxiosResponse<Token[]>> =>
  await axios.get("/token/${token}");


export const createToken = async (token: Token): Promise<AxiosResponse> =>
  await axios.post("/token", token);

