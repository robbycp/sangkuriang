export type Endpoint = ['get' | 'post' | 'put' | 'patch' | 'delete', string]

export const SCAN_GET: Endpoint = ['get', '/scan']
export const SCAN_SUBDOMAINS_POST: Endpoint = ['post', '/scan/subdomains/:target']
export const SCAN_NMAP_POST: Endpoint = ['post', '/scan/nmap/:target/top-port']
export const SCAN_WASP_SPIDER_POST: Endpoint = ['post', '/scan/zap/:target/spider']
export const SIGNIN_POST: Endpoint = ['post', '/admin/login']
export const SIGNUP_POST: Endpoint = ['post', '/admin/register']
