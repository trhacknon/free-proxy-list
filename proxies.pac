
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
        return "PROXY 130.61.95.193:3128;PROXY 95.174.67.50:18080;PROXY 80.90.80.54:8080;PROXY 198.98.58.178:8080;PROXY 185.117.9.210:8080;PROXY 128.199.214.87:3128;PROXY 213.174.103.91:3128;PROXY 51.68.71.95:3128;PROXY 1.255.48.197:8080;PROXY 64.71.145.122:3128;PROXY 14.140.131.82:3128;PROXY 13.75.77.214:44355;";
}
