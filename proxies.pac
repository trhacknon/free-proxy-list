
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
        return "PROXY 51.161.116.223:3128;PROXY 83.171.98.167:3128;PROXY 144.217.101.245:3129;PROXY 128.199.182.99:8080;PROXY 192.41.19.53:3128;PROXY 159.203.44.177:3128;PROXY 23.237.74.98:3128;PROXY 149.28.157.52:8080;PROXY 216.250.236.11:3128;PROXY 192.41.13.71:3128;PROXY 91.214.179.5:8080;PROXY 132.145.195.93:3128;PROXY 34.96.245.15:8080;PROXY 82.200.233.4:3128;";
}
