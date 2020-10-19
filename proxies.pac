
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
        return "PROXY 95.179.218.100:8080;PROXY 85.14.243.31:3128;PROXY 176.9.85.13:3128;PROXY 45.32.115.62:3128;PROXY 103.35.64.12:3128;PROXY 45.159.115.56:3128;PROXY 186.211.177.161:8082;PROXY 117.204.254.7:8080;PROXY 117.247.190.141:80;PROXY 35.185.16.35:80;PROXY 91.214.179.5:8080;PROXY 36.68.32.74:80;PROXY 52.179.18.244:8080;";
}
