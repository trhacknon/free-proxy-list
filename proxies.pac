
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
        return "PROXY 142.93.163.56:8080;PROXY 95.216.10.19:3128;PROXY 176.9.85.13:3128;PROXY 216.250.236.11:3128;PROXY 85.14.243.31:3128;PROXY 192.41.13.71:3128;PROXY 51.161.116.223:3128;PROXY 186.211.177.161:8082;PROXY 169.239.182.151:3128;PROXY 159.203.44.177:3128;PROXY 182.52.83.126:8080;PROXY 128.199.182.99:8080;PROXY 183.89.12.174:8080;PROXY 132.145.195.93:3128;PROXY 181.119.69.153:3128;PROXY 80.90.80.54:8080;PROXY 216.250.236.10:3128;PROXY 104.211.230.17:3128;";
}
