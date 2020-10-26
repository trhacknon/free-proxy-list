
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
        return "PROXY 80.23.125.226:3128;PROXY 85.14.243.31:3128;PROXY 80.90.80.54:8080;PROXY 104.149.139.206:3128;PROXY 171.6.19.17:8080;PROXY 210.212.227.70:3128;PROXY 186.211.177.161:8082;PROXY 159.203.44.177:3128;PROXY 91.214.179.5:8080;";
}
