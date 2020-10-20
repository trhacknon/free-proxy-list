
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
        return "PROXY 207.154.221.87:3128;PROXY 176.9.85.13:3128;PROXY 85.14.243.31:3128;PROXY 167.99.130.15:3128;PROXY 167.99.140.96:3128;PROXY 95.217.186.24:3128;PROXY 165.22.36.75:8888;PROXY 51.161.116.223:3128;PROXY 192.41.13.71:3128;PROXY 186.211.177.161:8082;PROXY 185.203.5.143:45420;";
}
