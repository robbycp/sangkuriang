export type Endpoint = ['get' | 'post' | 'put' | 'patch' | 'delete', string]

export const SCAN_GET: Endpoint = ['get', '/scan']
export const SCAN_NMAP_GET: Endpoint = ['post', '/scan/nmap/:target/top-port']
export const SIGNIN_POST: Endpoint = ['post', '/admin/login']
export const SIGNUP_POST: Endpoint = ['post', '/admin/register']
