import * as api from "./types/api"
import axios, * as _axios from "axios"
import type * as express from "express"

export type Insert<T extends { id: number | string }> = Omit<T, "id">
export type Update<T> = Partial<T>

let rest: _axios.AxiosInstance

export function setupConfig(config: _axios.AxiosRequestConfig) {
  rest = axios.create(config)
  return config
}

export function getAxiosInstance() {
  if (!rest)
    throw new Error(
      "Axios config not defined. Please call the utils.setupConfig() method!"
    )

  return rest
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
  body: Target["Body"],
  config?: _axios.AxiosRequestConfig & { params: api.PagingParameters }
): Promise<{ data: Target["Response"]; headers: _axios.AxiosResponseHeaders }> {
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

  switch (_method) {
    case "get":
    case "delete":
      return rest.get(route, config).then((response) => response.data)
    default:
      return rest[_method](route, body, config).then((response) => ({
        data: response.data,
        headers: response.headers,
      }))
  }
}

export function buildRouteMaker(router: express.Router) {
  return function route<
    Item extends api.Item,
    Method extends keyof Item["Methods"] & string = keyof Item["Methods"] &
      string,
    Target extends Item["Methods"][Method] &
      api.MethodObject = Item["Methods"][Method] & api.MethodObject
  >(
    method: Method,
    route: Item["Route"],
    ...listeners: express.RequestHandler[]
  ) {
    createRoute(router, method, route, ...listeners)
  }
}

export function createRoute<
  Item extends api.Item,
  Method extends keyof Item["Methods"] & string = keyof Item["Methods"] &
    string,
  Target extends Item["Methods"][Method] &
    api.MethodObject = Item["Methods"][Method] & api.MethodObject
>(
  router: express.Router,
  method: Method,
  route: Item["Route"],
  ...listeners: express.RequestHandler[]
) {
  const _method = method.toLowerCase() as
    | "get"
    | "put"
    | "patch"
    | "post"
    | "delete"

  router[_method](route, ...listeners)
}
