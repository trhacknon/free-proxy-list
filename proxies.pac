
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
        return "PROXY 130.61.95.193:3128;PROXY 95.174.67.50:18080;PROXY 51.75.147.41:3128;PROXY 80.90.80.54:8080;PROXY 198.98.58.178:8080;PROXY 185.117.9.210:8080;PROXY 118.99.103.246:8080;PROXY 159.203.44.177:3128;PROXY 186.211.177.161:8082;PROXY 36.92.57.213:8080;PROXY 200.255.122.170:8080;PROXY 14.140.131.82:3128;PROXY 202.147.206.98:8080;";
}
