
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
        return "PROXY 80.90.80.54:8080;PROXY 52.179.18.244:8080;PROXY 159.203.44.177:3128;PROXY 45.62.216.124:3128;PROXY 144.217.101.245:3129;PROXY 165.22.36.75:8888;PROXY 171.22.24.197:3128;PROXY 91.214.179.5:8080;PROXY 51.161.116.223:3128;PROXY 186.211.177.161:8082;PROXY 35.185.16.35:80;PROXY 117.247.190.141:80;PROXY 138.0.202.21:8080;";
}
