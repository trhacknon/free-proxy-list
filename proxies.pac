
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
        return "PROXY 165.22.36.75:8888;PROXY 51.161.116.223:3128;PROXY 103.35.64.12:3128;PROXY 185.117.9.210:8080;PROXY 181.119.69.153:3128;PROXY 163.172.47.182:8080;PROXY 191.235.72.144:8000;";
}
