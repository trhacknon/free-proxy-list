
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
        return "PROXY 176.9.85.13:3128;PROXY 51.75.147.44:3128;PROXY 51.89.32.83:3128;PROXY 51.75.147.40:3128;PROXY 91.214.179.5:8080;PROXY 50.17.139.35:3128;PROXY 89.187.181.71:3128;PROXY 62.171.177.80:3129;PROXY 159.203.44.177:3128;PROXY 161.97.65.52:3128;PROXY 85.14.243.31:3128;PROXY 83.48.15.142:3128;";
}
