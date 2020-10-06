
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
        return "PROXY 91.214.179.5:8080;PROXY 80.90.80.54:8080;PROXY 159.203.44.177:3128;PROXY 1.255.48.197:8080;PROXY 186.211.177.161:8082;PROXY 181.119.158.1:3128;PROXY 202.147.206.98:8080;PROXY 82.200.233.4:3128;";
}
