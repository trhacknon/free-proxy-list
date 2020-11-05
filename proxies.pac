
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
        return "PROXY 95.216.10.19:3128;PROXY 85.14.243.31:3128;PROXY 51.89.32.83:3128;PROXY 176.9.85.13:3128;PROXY 45.12.19.35:3128;PROXY 50.17.139.35:3128;PROXY 89.187.181.71:3128;PROXY 159.203.44.177:3128;PROXY 107.152.35.198:3128;PROXY 173.37.55.62:8080;PROXY 192.41.19.53:3128;PROXY 209.126.8.58:3128;PROXY 45.82.245.34:3128;PROXY 185.117.9.210:8080;PROXY 201.193.217.227:3128;PROXY 1.255.48.197:8080;PROXY 157.230.247.57:3128;PROXY 172.105.215.75:3128;PROXY 59.124.224.180:4378;PROXY 51.178.137.159:3128;PROXY 59.124.224.180:3128;";
}
