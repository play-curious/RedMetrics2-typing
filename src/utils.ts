import axios, * as _axios from "axios"
import * as api from "./types/api"

export type Insert<T extends { id: number | string }> = Omit<T, "id">
export type Update<T> = Partial<T>

let rest: _axios.AxiosInstance

export function setupConfig(config: _axios.AxiosRequestConfig) {
  rest = axios.create(config)
}

export async function request<
  Item extends api.Item,
  Method extends keyof Item["Methods"] & string = keyof Item["Methods"] &
    string,
  Target extends Item["Methods"][Method] &
    api.MethodObject = Item["Methods"][Method] & api.MethodObject
>(
  method: Method,
  route: Item["Route"],
  body: Target["Body"]
): Promise<Target["Response"]> {
  if (!rest)
    throw new Error(
      "Axios config not defined. Please call the utils.setupConfig() method!"
    )

  const _method = method.toLowerCase() as
    | "get"
    | "put"
    | "patch"
    | "post"
    | "delete"

  return rest[_method](route, body).then((response) => response.data)
}
