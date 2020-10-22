
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
        return "PROXY 195.201.113.108:3128;PROXY 64.137.175.85:3128;PROXY 92.244.99.229:3128;PROXY 192.41.13.71:3128;PROXY 104.149.139.206:3128;PROXY 103.35.64.12:3128;PROXY 91.214.179.5:8080;PROXY 177.55.178.122:80;PROXY 211.204.50.10:3128;PROXY 2.56.215.247:3128;PROXY 165.22.36.75:8888;PROXY 118.99.99.158:8080;PROXY 95.216.196.233:3128;";
}
