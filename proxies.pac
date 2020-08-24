
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
        return "PROXY 51.89.32.83:3128;PROXY 51.89.103.246:3128;PROXY 139.59.129.114:3128;PROXY 52.179.18.244:8080;PROXY 34.105.59.26:80;PROXY 172.104.165.212:3128;PROXY 1.0.177.1:8080;PROXY 103.139.103.34:3133;PROXY 189.112.82.29:3128;PROXY 118.163.83.21:3128;PROXY 137.59.54.38:5836;PROXY 150.95.178.87:3128;PROXY 172.104.115.51:3128;";
}
