
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
        return "PROXY 62.171.177.80:3129;PROXY 51.178.137.159:3128;PROXY 144.91.83.174:3128;PROXY 185.117.9.210:8080;PROXY 159.203.44.177:3128;PROXY 1.255.48.197:8080;PROXY 37.72.175.164:3128;PROXY 85.14.243.31:3128;PROXY 181.119.69.153:3128;PROXY 91.214.179.5:8080;";
}
