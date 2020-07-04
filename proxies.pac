
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
        return "PROXY 51.158.119.88:8811;PROXY 5.141.117.33:81;PROXY 189.2.135.18:3128;PROXY 104.244.77.254:8080;PROXY 62.171.177.80:3129;PROXY 185.117.9.210:8080;PROXY 85.113.39.89:81;PROXY 150.95.178.151:8888;";
}
