
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
        return "PROXY 160.20.147.186:8118;PROXY 80.90.80.54:8080;PROXY 50.17.139.35:3128;PROXY 65.51.251.218:3128;PROXY 216.250.236.10:3128;PROXY 210.212.227.70:3128;PROXY 181.119.69.153:3128;PROXY 216.250.236.11:3128;";
}
