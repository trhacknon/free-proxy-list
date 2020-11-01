
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
        return "PROXY 80.90.80.54:8080;PROXY 104.149.139.206:3128;PROXY 85.14.243.31:3128;PROXY 186.211.177.161:8082;PROXY 144.91.83.174:3128;PROXY 216.250.236.10:3128;PROXY 95.105.3.172:8080;PROXY 181.119.158.1:3128;";
}
