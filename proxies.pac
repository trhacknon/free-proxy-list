
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
        return "PROXY 159.89.106.55:3128;PROXY 159.89.24.212:8080;PROXY 167.99.247.83:3128;PROXY 95.216.10.19:3128;PROXY 80.90.80.54:8080;PROXY 162.244.81.58:3128;PROXY 162.244.81.61:3128;PROXY 51.178.220.22:3128;PROXY 161.97.84.211:3128;PROXY 128.199.204.219:8080;PROXY 210.212.227.70:3128;PROXY 190.119.176.140:999;PROXY 59.124.224.180:3128;PROXY 23.237.74.98:3128;PROXY 85.14.243.31:3128;";
}
