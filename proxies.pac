
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
        return "PROXY 185.20.224.239:3128;PROXY 139.28.152.60:80;PROXY 161.97.72.126:3128;PROXY 159.203.44.177:3128;PROXY 185.255.178.58:3128;PROXY 45.62.216.124:3128;PROXY 51.161.116.223:3128;PROXY 61.252.54.66:3128;PROXY 186.211.177.161:8082;PROXY 1.255.48.197:8080;PROXY 52.179.18.244:8080;PROXY 181.119.158.1:3128;PROXY 117.247.190.141:80;PROXY 191.102.232.130:3128;";
}
