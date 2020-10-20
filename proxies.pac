
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
        return "PROXY 165.22.36.75:8888;PROXY 186.211.177.161:8082;PROXY 159.203.44.177:3128;PROXY 167.99.140.96:3128;PROXY 103.35.64.12:3128;PROXY 104.198.125.34:3128;PROXY 45.32.115.62:3128;";
}
