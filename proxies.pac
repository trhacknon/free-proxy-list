
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
        return "PROXY 82.148.14.29:8080;PROXY 95.216.10.19:3128;PROXY 176.9.85.13:3128;PROXY 216.250.236.11:3128;PROXY 38.91.106.212:3128;PROXY 161.97.65.52:3128;PROXY 124.122.114.177:8080;PROXY 124.121.2.160:8080;PROXY 51.91.32.14:8181;PROXY 159.203.44.177:3128;PROXY 107.152.35.198:3128;PROXY 91.214.179.5:8080;PROXY 51.89.32.83:3128;PROXY 3.0.78.151:80;";
}
