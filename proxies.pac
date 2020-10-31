
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
        return "PROXY 176.9.85.13:3128;PROXY 95.216.10.19:3128;PROXY 51.79.79.111:3128;PROXY 104.149.139.206:3128;PROXY 104.211.230.17:3128;PROXY 82.177.105.12:8080;PROXY 181.119.69.153:3128;PROXY 181.119.158.1:3128;PROXY 59.124.224.180:3128;PROXY 194.5.207.163:3128;PROXY 157.230.247.57:3128;PROXY 183.89.40.204:8080;";
}
