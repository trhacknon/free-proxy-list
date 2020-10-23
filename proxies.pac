
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
        return "PROXY 85.14.243.31:3128;PROXY 159.203.44.177:3128;PROXY 64.137.175.85:3128;PROXY 103.35.64.12:3128;PROXY 144.217.101.245:3129;PROXY 210.212.227.70:3128;PROXY 181.119.158.1:3128;PROXY 181.119.69.153:3128;";
}
