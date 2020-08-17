
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
        return "PROXY 51.77.229.110:3128;PROXY 163.172.222.64:5836;PROXY 95.174.67.50:18080;PROXY 147.75.51.179:3128;PROXY 34.72.19.151:3128;PROXY 104.248.50.126:3128;PROXY 159.203.44.177:3128;PROXY 147.75.109.175:3128;PROXY 167.99.1.34:8888;PROXY 186.211.177.161:8082;PROXY 1.255.48.197:8080;PROXY 103.28.121.58:80;PROXY 103.28.121.58:3128;PROXY 198.98.55.168:8080;PROXY 206.176.121.181:8080;PROXY 157.230.155.18:10492;PROXY 167.250.65.246:8080;PROXY 199.91.203.210:3128;PROXY 185.70.105.178:5836;";
}
