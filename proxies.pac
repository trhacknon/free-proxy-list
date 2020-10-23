
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
        return "PROXY 137.117.214.111:3128;PROXY 135.181.36.161:8888;PROXY 85.14.243.31:3128;PROXY 80.90.80.54:8080;PROXY 165.22.36.75:8888;PROXY 51.161.116.223:3128;PROXY 194.5.188.193:3128;PROXY 159.203.44.177:3128;PROXY 23.237.74.98:3128;PROXY 191.235.72.144:8000;PROXY 216.250.236.10:3128;PROXY 176.9.85.13:3128;PROXY 181.119.158.1:3128;PROXY 192.41.13.71:3128;PROXY 45.159.115.56:3128;PROXY 181.119.69.153:3128;";
}
