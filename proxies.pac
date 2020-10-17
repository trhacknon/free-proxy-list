
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
        return "PROXY 85.14.243.31:3128;PROXY 158.69.22.224:3128;PROXY 128.199.169.61:8080;PROXY 52.183.123.60:3128;PROXY 103.35.64.12:3128;PROXY 45.159.115.56:3128;PROXY 194.5.188.193:3128;PROXY 80.90.80.54:8080;PROXY 92.244.99.229:3128;PROXY 51.178.137.159:3128;";
}
