
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
        return "PROXY 51.38.112.123:8080;PROXY 51.75.147.40:3128;PROXY 212.83.143.107:5836;PROXY 95.174.67.50:18080;PROXY 45.76.29.43:3128;PROXY 144.217.242.141:8080;PROXY 66.42.85.5:3128;PROXY 165.22.107.219:3128;PROXY 82.200.198.74:3128;PROXY 183.89.90.162:8080;PROXY 183.88.36.232:8080;PROXY 45.238.54.101:999;PROXY 171.101.130.66:8080;PROXY 198.98.58.178:8080;PROXY 103.89.136.77:3128;PROXY 167.250.65.246:8080;PROXY 183.88.193.28:8080;PROXY 69.162.83.228:5836;PROXY 51.68.71.95:3128;PROXY 202.182.125.226:8080;PROXY 186.225.110.166:8080;";
}
