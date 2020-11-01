
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
        return "PROXY 95.216.10.19:3128;PROXY 159.203.44.177:3128;PROXY 128.199.204.219:8080;PROXY 104.149.139.206:3128;PROXY 187.87.38.28:53281;PROXY 85.14.243.31:3128;PROXY 144.91.83.174:3128;PROXY 194.5.207.163:3128;PROXY 64.137.175.85:3128;PROXY 51.161.116.223:3128;PROXY 216.250.236.11:3128;";
}
