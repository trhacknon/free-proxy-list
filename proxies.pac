
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
        return "PROXY 51.68.71.95:3128;PROXY 185.162.170.4:8080;PROXY 52.179.18.244:8080;PROXY 46.218.155.194:3128;PROXY 206.176.121.181:8080;PROXY 159.65.14.50:3128;PROXY 159.203.44.177:3128;PROXY 124.121.124.14:8080;PROXY 186.211.177.161:8082;PROXY 95.179.128.75:8080;PROXY 13.115.118.70:3128;PROXY 103.28.121.58:80;PROXY 103.28.121.58:3128;PROXY 1.255.48.197:8080;PROXY 177.36.128.162:8080;PROXY 199.91.203.210:3128;PROXY 196.43.180.10:3128;PROXY 198.98.56.71:8080;PROXY 201.157.44.108:3128;PROXY 157.230.155.18:10492;";
}
