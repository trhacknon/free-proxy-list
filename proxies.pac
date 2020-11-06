
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
        return "PROXY 91.214.179.5:8080;PROXY 47.253.9.120:8080;PROXY 139.162.110.202:8080;PROXY 45.228.233.145:3128;PROXY 116.58.251.14:8080;PROXY 180.253.24.100:8080;PROXY 210.212.227.70:3128;PROXY 14.139.107.211:3128;PROXY 185.89.180.255:8080;PROXY 47.253.0.107:8080;PROXY 194.110.149.130:8080;PROXY 54.207.243.208:8080;PROXY 161.97.65.52:3128;";
}
