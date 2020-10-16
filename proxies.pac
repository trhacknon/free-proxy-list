
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
        return "PROXY 195.201.61.51:8000;PROXY 80.90.80.54:8080;PROXY 45.159.115.56:3128;PROXY 13.251.221.173:8080;PROXY 197.232.55.155:3128;PROXY 91.214.179.5:8080;PROXY 191.102.232.130:3128;PROXY 51.75.147.41:3128;PROXY 59.124.224.180:3128;";
}
