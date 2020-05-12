
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
        return "PROXY 178.128.243.121:3128;PROXY 136.244.97.161:8080;PROXY 116.202.163.57:3128;PROXY 217.163.28.105:80;PROXY 136.244.98.66:8080;PROXY 51.158.105.192:5836;PROXY 212.83.189.213:5836;PROXY 163.172.155.146:5836;PROXY 51.15.134.99:5836;PROXY 45.90.57.220:5836;PROXY 51.15.215.47:5836;PROXY 163.172.180.118:5836;PROXY 82.119.170.106:8080;PROXY 51.15.244.104:5836;PROXY 45.90.57.119:5836;PROXY 178.238.232.35:5836;PROXY 51.158.176.154:5836;PROXY 51.15.130.83:5836;PROXY 157.245.66.51:8080;PROXY 197.14.14.234:80;PROXY 209.250.253.136:8080;PROXY 209.97.138.116:8080;PROXY 5.141.117.33:81;PROXY 91.214.179.25:8080;PROXY 93.170.113.226:8080;PROXY 140.82.7.165:8080;PROXY 149.28.44.208:8080;PROXY 149.28.33.39:8080;PROXY 207.148.116.155:8080;PROXY 139.180.190.74:8080;PROXY 45.76.161.107:8080;PROXY 45.77.253.139:8080;PROXY 96.96.33.134:3128;PROXY 207.148.125.228:8080;PROXY 45.32.118.146:8080;PROXY 139.180.185.118:8080;PROXY 216.125.249.232:8080;PROXY 149.28.148.91:8080;PROXY 128.199.85.5:3128;PROXY 128.199.178.81:3128;PROXY 178.128.109.22:8080;PROXY 207.148.117.36:8080;PROXY 192.41.13.71:3128;PROXY 139.180.157.54:8080;";
}
