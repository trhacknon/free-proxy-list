
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
        return "PROXY 62.210.139.110:5836;PROXY 78.47.4.33:3129;PROXY 165.22.36.75:8888;PROXY 159.203.44.177:3128;PROXY 191.233.194.88:8080;PROXY 118.163.83.21:3128;PROXY 103.28.121.58:80;PROXY 198.98.55.168:8080;PROXY 89.223.28.195:3128;PROXY 51.89.103.246:3128;PROXY 52.179.18.244:8080;PROXY 200.73.132.107:8080;";
}
