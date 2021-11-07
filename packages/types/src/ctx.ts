import * as Koa from 'koa'
import { Request, Response } from 'express'
import { Context } from 'egg'

export interface ExpressContext {
  request: Request & {
    params: Request['params']
  }
  params?: Request['params']
  response: Response
}

export type ISSRContext<T={}> = (Koa.Context|ExpressContext|Context) & T

export interface Options {
  mode?: string
}
export interface IWindow extends Window {
  __USE_SSR__?: boolean
  __INITIAL_DATA__?: any
  STORE_CONTEXT?: any
  __USE_VITE__?: boolean
  __disableClientRender__?: boolean
  prefix?: string
}

export interface IGlobal {
  window: {
    __USE_SSR__?: IWindow['__USE_SSR__']
    __INITIAL_DATA__?: IWindow['__INITIAL_DATA__']
  }
}
