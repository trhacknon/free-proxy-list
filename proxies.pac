
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
        return "PROXY 95.216.10.19:3128;PROXY 85.14.243.31:3128;PROXY 80.90.80.54:8080;PROXY 162.244.81.61:3128;PROXY 165.22.36.75:8888;PROXY 159.203.44.177:3128;PROXY 51.161.116.223:3128;PROXY 192.41.19.53:3128;PROXY 110.77.236.133:8080;PROXY 23.237.74.98:3128;PROXY 95.217.186.24:3128;PROXY 05.172.3.235:8080;PROXY 216.250.236.11:3128;PROXY 169.239.182.151:3128;PROXY 34.96.245.15:8080;PROXY 110.77.236.161:8080;PROXY 51.75.147.35:3128;PROXY 64.137.176.32:3128;PROXY 132.145.195.93:3128;PROXY 167.250.65.246:8080;";
}
