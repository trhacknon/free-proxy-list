
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
        return "PROXY 130.61.95.193:3128;PROXY 176.9.63.62:3128;PROXY 95.174.67.50:18080;PROXY 80.90.80.54:8080;PROXY 198.98.54.241:8080;PROXY 128.199.214.87:3128;PROXY 167.250.65.246:8080;PROXY 36.92.57.213:8080;";
}
