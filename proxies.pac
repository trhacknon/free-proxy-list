
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
        return "PROXY 104.244.77.254:8080;PROXY 51.91.212.159:3128;PROXY 167.172.42.145:8080;PROXY 95.179.130.83:8080;PROXY 163.172.136.226:8811;PROXY 178.143.191.155:8080;PROXY 51.158.68.68:8811;PROXY 31.14.131.70:8080;PROXY 198.98.50.164:8080;PROXY 80.90.80.54:8080;PROXY 161.35.46.21:8080;PROXY 134.249.158.34:81;PROXY 165.227.221.151:3128;PROXY 45.33.90.184:8080;PROXY 5.141.117.33:81;PROXY 144.217.101.242:3129;PROXY 109.197.188.34:58080;PROXY 192.41.71.204:3128;PROXY 192.41.13.71:3128;PROXY 14.140.131.82:3128;PROXY 165.22.105.244:3128;PROXY 167.99.75.87:8080;PROXY 165.22.255.192:3128;PROXY 128.199.178.81:3128;PROXY 128.199.71.230:8080;PROXY 45.77.41.120:8080;PROXY 138.197.32.120:3128;PROXY 178.128.53.246:8080;PROXY 45.32.124.245:8080;PROXY 213.32.21.9:8080;PROXY 79.106.97.66:8080;PROXY 165.22.36.75:8888;PROXY 159.203.44.177:3128;PROXY 202.58.205.196:8080;PROXY 185.8.2.242:8080;PROXY 185.117.9.210:8080;PROXY 118.163.83.21:3128;PROXY 173.249.28.223:5836;PROXY 60.250.37.158:80;PROXY 34.95.235.219:8080;PROXY 45.32.53.40:8080;";
}
