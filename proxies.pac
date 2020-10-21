
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
        return "PROXY 47.254.151.148:8080;PROXY 176.9.85.13:3128;PROXY 66.97.120.70:3128;PROXY 91.214.179.5:8080;PROXY 175.144.251.146:3128;PROXY 104.211.230.17:3128;PROXY 23.237.74.98:3128;PROXY 120.89.90.234:8080;PROXY 186.211.177.161:8082;PROXY 195.201.113.108:3128;PROXY 205.234.39.57:8080;PROXY 66.97.120.123:3128;PROXY 45.159.115.56:3128;PROXY 191.250.108.164:8080;PROXY 59.124.224.180:3128;";
}
