
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
        return "PROXY 51.89.103.246:3128;PROXY 51.89.32.83:3128;PROXY 95.174.67.50:18080;PROXY 176.107.183.2:3128;PROXY 80.90.80.54:8080;PROXY 165.22.36.75:8888;PROXY 46.218.155.194:3128;PROXY 104.45.188.43:3128;PROXY 52.179.18.244:8080;PROXY 103.28.121.58:80;PROXY 181.119.69.153:3128;PROXY 103.28.121.58:3128;PROXY 186.225.110.166:8080;PROXY 118.163.83.21:3128;PROXY 185.117.9.210:8080;PROXY 14.140.131.82:3128;";
}
