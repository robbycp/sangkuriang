export const hasToken = () => !!localStorage.getItem('token')

export const getToken = () => localStorage.getItem('token')

export const setToken = (token: string) => {
  try {
    localStorage.setItem('token', token)
  } catch (error) {
    alert('Cannet store token')
  }
}

export const removeToken = () => localStorage.removeItem('token')
