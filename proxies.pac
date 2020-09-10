
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
        return "PROXY 104.244.77.254:8080;PROXY 130.61.95.193:3128;PROXY 51.75.147.41:3128;PROXY 185.117.9.210:8080;PROXY 128.199.214.87:3128;PROXY 103.146.177.39:80;PROXY 200.255.122.170:8080;PROXY 14.140.131.82:3128;";
}
