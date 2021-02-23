import axios from 'axios'
import UrlPattern from 'url-pattern'
import { Endpoint } from 'constants/endpoints'
import { getToken } from './token'

interface Options {
  endpoint: Endpoint
  params?: object
  query?: object
  body?: object
}

function api(options:Options) {
  const {
    endpoint,
    params = {},
    query,
    body,
  } = options
  const [method, path] = endpoint
  const urlParams = new UrlPattern(path).stringify(params)

  const accessToken = getToken()
  return axios({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000000,
    headers: {
      'Access-Control-Allow-Origin': "*",
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },

    method,
    url: urlParams,
    params: query,
    data: body,
  })
}

export default api
