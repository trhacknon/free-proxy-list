
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
        return "PROXY 176.9.85.13:3128;PROXY 167.99.140.96:3128;PROXY 45.159.115.56:3128;PROXY 198.50.163.192:3129;PROXY 191.234.174.180:3128;PROXY 85.14.243.31:3128;PROXY 101.108.119.174:8080;PROXY 186.211.177.161:8082;PROXY 191.102.232.130:3128;PROXY 194.5.188.193:3128;";
}
