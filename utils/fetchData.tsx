interface FetchConfig {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: { [key: string]: string }
  body?: { [key: string]: any } | string
}

interface FetchDataOptions {
  authentication?: boolean
  token?: string
}

export const fetchData = async <T,>(
  config: FetchConfig,
  options?: FetchDataOptions
): Promise<T> => {
  try {
    const response = await (options?.authentication && options.token
      ? fetch(config.url, {
        method: config.method || 'GET',
        headers: {
          ...config.headers,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${options.token}`,
        },
        body: config.body ? JSON.stringify(config.body) : undefined,
      })
      : fetch(config.url, {
        method: config.method || 'GET',
        headers: {
          ...config.headers,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: config.body ? JSON.stringify(config.body) : undefined,
      }))

    if (!response.ok) {
      const statusCode = response.status
      let statusMessage = ''
      if (response.status == 400) {
        statusMessage = '[AUTH_ERROR]'
      }
      if (response.status == 404) {
        statusMessage = '[NOT_FOUND]'
      }
      if (response.status == 500) {
        statusMessage = '[SERVER_ERROR]'
      }
      console.error(statusMessage)
      return {
        success: false,
        statusCode,
        statusMessage,
        request: config.body ? JSON.stringify(config.body) : {},
        data: response
      } as T
    }

    const data = await response.json()
    return data as T
  } catch (err: any) {
    console.error(err)
    return {
      success: false,
      statusCode: 500,
      statusMessage: '[EXCEPTION_ERROR]',
      request: {},
      data: {}
    } as T
  }
}

export default fetchData
