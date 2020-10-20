
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
        return "PROXY 85.14.243.31:3128;PROXY 167.99.130.15:3128;PROXY 134.209.24.86:8080;PROXY 165.22.36.75:8888;PROXY 159.203.44.177:3128;PROXY 51.161.116.223:3128;PROXY 103.35.64.12:3128;PROXY 185.117.9.210:8080;PROXY 95.217.186.24:3128;PROXY 1.255.48.197:8080;";
}
