
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
        return "PROXY 116.203.192.146:3128;PROXY 194.5.192.127:3128;PROXY 51.89.32.83:3128;PROXY 167.99.144.242:8888;PROXY 167.99.147.238:8888;PROXY 157.245.82.127:8888;PROXY 5.141.117.33:81;PROXY 147.75.51.179:3128;PROXY 159.203.44.177:3128;PROXY 157.230.155.18:10492;PROXY 52.179.18.244:8080;PROXY 188.165.141.114:3129;PROXY 178.33.251.230:3129;PROXY 183.89.57.94:8080;PROXY 191.235.98.23:3128;PROXY 1.255.48.197:8080;PROXY 46.218.155.194:3128;PROXY 80.90.80.54:8080;PROXY 35.247.134.162:3128;PROXY 35.240.255.201:3128;PROXY 186.211.177.161:8082;PROXY 51.254.237.77:3129;PROXY 199.195.252.161:8080;PROXY 180.246.174.3:8080;PROXY 51.15.169.64:5836;PROXY 89.223.28.195:3128;PROXY 209.141.46.133:8080;PROXY 139.99.88.228:8080;PROXY 79.137.44.85:3129;PROXY 118.163.83.21:3128;PROXY 103.28.121.58:80;";
}
