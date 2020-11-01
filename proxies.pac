
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
        return "PROXY 95.216.10.19:3128;PROXY 165.22.36.75:8888;PROXY 67.205.169.251:3128;PROXY 216.250.236.11:3128;PROXY 36.74.18.102:8080;PROXY 51.161.116.223:3128;PROXY 144.91.83.174:3128;PROXY 104.211.230.17:3128;PROXY 181.119.69.153:3128;PROXY 181.119.158.1:3128;";
}
