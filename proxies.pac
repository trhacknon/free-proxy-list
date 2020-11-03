
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
        return "PROXY 176.9.85.13:3128;PROXY 85.14.243.31:3128;PROXY 51.75.147.44:3128;PROXY 95.216.10.19:3128;PROXY 51.89.32.83:3128;PROXY 188.64.185.80:3128;PROXY 91.214.179.5:8080;PROXY 51.75.147.43:3128;PROXY 50.17.139.35:3128;PROXY 38.91.106.212:3128;PROXY 216.250.236.11:3128;PROXY 159.203.44.177:3128;PROXY 173.37.55.62:8080;PROXY 51.178.137.159:3128;PROXY 80.90.80.54:8080;PROXY 104.211.230.17:3128;PROXY 216.250.236.10:3128;PROXY 192.41.19.53:3128;PROXY 186.211.177.161:8082;PROXY 51.161.116.223:3128;PROXY 36.90.194.94:8080;";
}
