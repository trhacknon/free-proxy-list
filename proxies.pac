
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
        return "PROXY 81.169.225.85:3128;PROXY 52.179.18.244:8080;PROXY 186.211.177.161:8082;PROXY 85.113.39.89:81;PROXY 45.159.115.56:3128;PROXY 191.102.232.130:3128;PROXY 185.117.9.210:8080;PROXY 41.60.239.162:8080;";
}
