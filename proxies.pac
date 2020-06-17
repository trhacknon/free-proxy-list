
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
        return "PROXY 51.91.212.159:3128;PROXY 209.250.248.154:8080;PROXY 80.240.27.248:8080;PROXY 136.244.69.151:8080;PROXY 95.179.134.82:8080;PROXY 217.69.8.223:8080;PROXY 95.179.148.211:8080;PROXY 95.179.239.192:8080;PROXY 45.32.150.109:8080;PROXY 95.179.252.27:8080;PROXY 209.250.232.27:8080;PROXY 136.244.115.171:8080;PROXY 95.179.229.93:8080;PROXY 45.77.55.65:8080;PROXY 95.179.163.43:8080;PROXY 149.13.94.38:80;PROXY 51.158.165.18:8811;PROXY 178.238.232.35:5836;PROXY 207.246.125.107:8080;PROXY 104.156.227.8:8080;PROXY 140.82.61.253:8080;PROXY 155.138.158.227:8080;PROXY 149.248.59.26:8080;PROXY 185.117.9.210:8080;PROXY 128.199.130.51:8080;PROXY 91.214.179.25:8080;PROXY 157.245.104.231:3128;PROXY 139.180.142.71:8080;PROXY 45.76.144.18:8080;PROXY 52.163.229.106:3128;PROXY 159.65.149.110:3128;PROXY 178.128.82.208:8080;PROXY 104.248.149.205:8080;PROXY 207.148.121.254:8080;PROXY 45.32.112.192:8080;PROXY 157.245.104.241:3128;PROXY 45.76.146.98:8080;PROXY 45.77.251.72:8080;PROXY 167.71.238.62:3128;PROXY 45.76.160.140:8080;PROXY 149.28.128.194:8080;PROXY 149.28.133.119:8080;";
}
