import http from '@/api/http'

export const login = params => {
  return http.post('/login', params)
}
