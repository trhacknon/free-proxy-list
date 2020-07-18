
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
        return "PROXY 95.179.182.151:8080;PROXY 189.2.135.18:3128;PROXY 198.98.58.178:8080;PROXY 105.112.8.53:3128;PROXY 145.239.121.218:3129;PROXY 128.199.149.7:8080;PROXY 103.28.121.58:80;PROXY 80.90.80.54:8080;PROXY 203.69.180.135:80;";
}
