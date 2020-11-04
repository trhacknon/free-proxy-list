
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
        return "PROXY 91.214.179.5:8080;PROXY 65.51.251.218:3128;PROXY 159.203.44.177:3128;PROXY 144.91.83.174:3128;PROXY 209.126.8.58:3128;PROXY 192.41.13.71:3128;PROXY 80.90.80.54:8080;";
}
