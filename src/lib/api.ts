import { useAppStore } from '@/store/app-store'
import { useAuthStore } from '@/store/auth-store'
import axios, { AxiosError, HttpStatusCode } from 'axios'
import { redirect } from 'react-router-dom'
import { toast } from 'sonner'
import { t } from './languages/language'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKOFFICE_API_URL,
  timeout: 20000
})

export async function request<T>({
  body,
  queryParams,
  ...rest
}: HttpRequest): Promise<HttpResponse<T>> {
  try {
    const { session } = useAuthStore.getState()

    const response = await api.request<T>({
      ...rest,
      data: body,
      params: queryParams,
      headers: {
        ...rest.headers,
        ...(session?.token && {
          Authorization: `Bearer ${session.token}`
        })
      }
    })

    return new Promise(resolve => {
      resolve({
        statusCode: response.status,
        body: response.data
      })
    })
  } catch (err) {
    return new Promise((_, reject) => {
      reject(errorHandler(err))
    })
  }
}

export type HttpRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpRequestHeader = {
  [key: string]: string
}

export type QueryParam = {
  [key: string]: string
}

export type HttpRequest = {
  url: string
  method?: HttpRequestMethod
  headers?: HttpRequestHeader
  queryParams?: QueryParam
  body?: any
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  message?: string
  body?: T
}

export type HttpPaginatedResponse<T> = {
  statusCode: HttpStatusCode
  body?: { items: T[]; total: number }
}

export type HttpResponseError = {
  statusCode: HttpStatusCode
  message: string
  data?: any
}

export class ApiError implements HttpResponseError {
  statusCode = 0
  message = ''
  data = {}

  constructor(statusCode: HttpStatusCode, message: string, data: any) {
    this.statusCode = statusCode
    this.message = message
    this.data = data
  }
}

function axiosErrorHandler(error: AxiosError<any>): HttpResponseError {
  const { language } = useAppStore.getState()

  if (error?.response?.status === 401) {
    toast.error(t(language).api.errors.sessionExpired)

    useAuthStore.setState({
      session: undefined,
      isAuthenticated: false
    })

    redirect('/login')
  }

  return {
    statusCode: error.response ? error.response.status : 0,
    message: error.response ? error.response.data.error : error.message,
    data: error.response ? error.response.data : {}
  }
}

export function errorHandler(error: any): HttpResponseError {
  if (error.name === 'AxiosError') {
    return axiosErrorHandler(error)
  }

  const responseError: HttpResponseError = {
    statusCode: error.response ? error.response.status : 0,
    message: error.response
      ? error.response.message
      : 'An error ocurred during the request',
    data: error.response ? error.response.data : {}
  }

  return responseError
}
