
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
        return "PROXY 198.98.54.241:8080;PROXY 95.179.182.151:8080;PROXY 199.217.117.41:5836;PROXY 36.92.57.213:8080;PROXY 51.158.119.88:8761;PROXY 34.91.135.38:80;PROXY 198.98.58.178:8080;PROXY 79.137.44.85:3129;PROXY 103.28.121.58:3128;PROXY 4.14.219.157:3128;PROXY 128.199.149.7:8080;PROXY 103.28.121.58:80;PROXY 185.117.9.210:8080;PROXY 51.158.119.88:8811;PROXY 198.98.56.71:8080;PROXY 104.244.75.26:8080;PROXY 203.69.180.135:80;";
}
