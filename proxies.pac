
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
        return "PROXY 85.14.243.31:3128;PROXY 176.9.85.13:3128;PROXY 165.227.157.84:3128;PROXY 95.217.186.24:3128;PROXY 80.90.80.54:8080;PROXY 51.161.116.223:3128;PROXY 159.203.44.177:3128;PROXY 185.117.9.210:8080;PROXY 92.244.99.229:3128;PROXY 64.137.175.85:3128;PROXY 210.212.227.70:3128;PROXY 1.255.48.197:8080;PROXY 183.88.16.219:8080;PROXY 41.220.138.235:8080;PROXY 103.73.63.239:8080;PROXY 165.22.36.75:8888;PROXY 125.164.39.20:8080;";
}
