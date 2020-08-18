
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
        return "PROXY 3.120.207.86:3128;PROXY 51.68.71.95:3128;PROXY 77.55.218.3:3128;PROXY 45.12.19.35:3128;PROXY 31.193.79.2:3128;PROXY 35.192.37.211:3128;PROXY 206.176.121.181:8080;PROXY 87.76.34.226:35782;PROXY 103.28.37.131:3128;PROXY 157.52.192.194:3128;PROXY 103.28.121.58:80;PROXY 103.28.121.58:3128;PROXY 89.223.28.195:3128;PROXY 80.90.80.54:8080;PROXY 185.117.9.210:8080;PROXY 59.124.224.180:3128;PROXY 163.172.222.64:5836;PROXY 61.7.174.136:8080;PROXY 14.140.131.82:3128;PROXY 37.120.168.223:8888;PROXY 51.79.146.236:8080;";
}
