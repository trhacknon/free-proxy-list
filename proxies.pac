
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
        return "PROXY 176.9.85.13:3128;PROXY 165.22.36.75:8888;PROXY 185.211.35.138:45420;PROXY 103.35.64.12:3128;PROXY 117.247.190.141:80;PROXY 185.214.164.111:3128;PROXY 192.41.13.71:3128;PROXY 185.117.9.210:8080;PROXY 186.211.177.161:8082;PROXY 191.235.72.144:8000;";
}
