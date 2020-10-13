
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
        return "PROXY 139.28.152.60:80;PROXY 51.161.116.223:3128;PROXY 45.62.216.124:3128;PROXY 103.242.32.36:8080;PROXY 117.247.190.141:80;PROXY 212.87.220.2:3128;PROXY 181.119.158.1:3128;PROXY 91.214.179.5:8080;PROXY 134.249.134.41:3128;PROXY 159.203.44.177:3128;";
}
