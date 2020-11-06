
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
        return "PROXY 176.9.85.13:3128;PROXY 51.89.32.83:3128;PROXY 83.48.15.142:3128;PROXY 89.187.181.71:3128;PROXY 173.37.55.62:8080;PROXY 210.212.227.70:3128;PROXY 159.203.44.177:3128;PROXY 1.255.48.197:8080;PROXY 49.247.9.112:8080;PROXY 91.214.179.5:8080;PROXY 47.253.6.15:8080;PROXY 185.117.9.210:8080;";
}
