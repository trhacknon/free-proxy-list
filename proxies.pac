
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
        return "PROXY 104.244.77.254:8080;PROXY 95.174.67.50:18080;PROXY 91.214.179.5:8080;PROXY 198.98.58.178:8080;PROXY 185.117.9.210:8080;PROXY 213.174.103.91:3128;PROXY 167.250.65.246:8080;PROXY 159.203.44.177:3128;PROXY 1.255.48.197:8080;PROXY 200.255.122.170:8080;PROXY 104.244.75.26:8080;PROXY 13.75.77.214:44355;";
}
