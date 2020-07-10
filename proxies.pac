
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
        return "PROXY 64.188.3.162:3128;PROXY 95.179.182.151:8080;PROXY 202.147.206.98:8080;PROXY 199.217.117.41:5836;PROXY 36.92.57.213:8080;PROXY 51.158.119.88:8761;PROXY 34.91.135.38:80;PROXY 178.33.251.230:3129;PROXY 85.113.39.89:81;PROXY 79.137.44.85:3129;PROXY 103.28.121.58:3128;PROXY 4.14.219.157:3128;PROXY 103.28.121.58:80;PROXY 51.158.119.88:8811;PROXY 51.254.104.83:3190;PROXY 203.69.180.135:80;";
}
