
function FindProxyForURL(url, host) {
    //Bypass local
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
        
    //else
        return "PROXY 95.179.252.27:8080;PROXY 51.15.48.237:3128;PROXY 95.179.148.211:8080;PROXY 217.172.190.243:5836;PROXY 91.200.101.203:31285;PROXY 51.91.212.159:3128;PROXY 136.244.107.125:8080;PROXY 51.15.44.103:3128;PROXY 51.15.84.140:3128;PROXY 51.158.170.98:3128;PROXY 163.172.181.22:3128;PROXY 51.15.205.14:3128;PROXY 51.15.63.83:3128;PROXY 51.195.137.128:8080;PROXY 95.179.170.133:8080;PROXY 51.15.123.92:3128;PROXY 62.171.177.80:3129;PROXY 51.158.164.215:3128;PROXY 51.158.176.92:3128;PROXY 51.15.38.252:3128;PROXY 51.15.121.31:3128;PROXY 51.158.186.211:3128;PROXY 51.15.91.22:3128;PROXY 51.15.70.238:3128;PROXY 51.15.89.173:3128;PROXY 51.15.101.96:3128;PROXY 51.15.64.6:3128;PROXY 51.15.71.102:3128;PROXY 51.158.184.106:3128;PROXY 51.15.54.38:3128;PROXY 51.158.176.46:3128;PROXY 51.158.188.186:3128;PROXY 108.61.117.142:8080;PROXY 51.15.40.93:3128;PROXY 51.15.74.12:3128;PROXY 51.15.67.223:3128;PROXY 51.15.116.8:3128;PROXY 51.158.168.211:3128;PROXY 51.15.78.199:3128;PROXY 51.15.120.250:3128;PROXY 79.25.74.155:8080;PROXY 51.15.113.45:3128;PROXY 149.28.228.2:8080;PROXY 46.218.155.194:3128;PROXY 51.158.175.114:3128;PROXY 51.158.182.18:3128;PROXY 207.148.25.186:8080;";
}
