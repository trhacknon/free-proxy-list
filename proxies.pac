
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
        return "PROXY 176.9.85.13:3128;PROXY 95.217.186.24:3128;PROXY 85.14.243.31:3128;PROXY 51.79.79.111:3128;PROXY 159.203.44.177:3128;PROXY 216.250.236.10:3128;PROXY 104.149.139.206:3128;PROXY 91.214.179.5:8080;PROXY 80.90.80.54:8080;PROXY 101.109.58.232:8080;PROXY 216.250.236.11:3128;PROXY 186.211.177.161:8082;PROXY 192.41.19.53:3128;PROXY 23.237.74.98:3128;PROXY 59.124.224.180:3128;PROXY 51.178.220.22:3128;";
}
