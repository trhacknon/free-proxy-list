
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
        return "PROXY 176.9.63.62:3128;PROXY 95.174.67.50:18080;PROXY 80.90.80.54:8080;PROXY 173.212.230.5:3128;PROXY 165.22.211.212:3128;PROXY 159.203.44.177:3128;PROXY 139.162.109.91:3128;PROXY 45.71.37.20:999;PROXY 157.7.223.232:3128;PROXY 51.158.76.180:3128;PROXY 223.205.60.24:8080;PROXY 202.69.48.122:3128;PROXY 104.45.188.43:3128;PROXY 86.124.130.141:3128;PROXY 94.141.225.108:8080;PROXY 52.251.120.221:3128;PROXY 61.7.138.40:8080;PROXY 159.65.14.50:3128;";
}
