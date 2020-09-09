
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
        return "PROXY 104.244.77.254:8080;PROXY 95.174.67.50:18080;PROXY 51.75.147.40:3128;PROXY 159.203.44.177:3128;PROXY 1.255.48.197:8080;PROXY 186.211.177.161:8082;PROXY 200.255.122.170:8080;PROXY 173.212.230.5:3128;PROXY 181.119.158.1:3128;PROXY 14.140.131.82:3128;PROXY 202.147.206.98:8080;PROXY 104.244.75.26:8080;PROXY 13.75.77.214:44355;";
}
