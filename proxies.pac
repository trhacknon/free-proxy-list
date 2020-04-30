
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
        return "PROXY 212.237.31.116:3128;PROXY 54.37.131.45:3128;PROXY 46.239.41.110:8080;PROXY 178.128.87.130:3128;PROXY 178.128.96.50:3128;PROXY 118.99.88.239:3128;PROXY 167.86.66.178:3128;PROXY 27.145.63.32:8080;PROXY 60.250.37.158:80;PROXY 191.37.49.226:3128;PROXY 49.49.95.252:8080;PROXY 203.82.36.107:8080;PROXY 103.73.182.244:8080;PROXY 85.113.39.89:81;PROXY 36.90.97.126:8080;PROXY 140.82.60.35:3128;PROXY 118.70.144.77:3128;PROXY 36.92.57.213:8080;PROXY 36.90.224.235:3128;PROXY 197.216.2.14:8080;PROXY 117.197.43.214:8080;PROXY 197.216.2.18:8080;PROXY 138.197.32.120:3128;PROXY 139.180.184.133:8080;PROXY 203.82.36.105:8080;PROXY 203.69.180.135:80;";
}
