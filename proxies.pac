
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
        return "PROXY 159.69.153.122:3128;PROXY 82.165.244.38:3128;PROXY 136.243.47.220:3128;PROXY 51.91.212.159:3128;PROXY 167.86.66.178:3128;PROXY 128.199.49.121:8080;PROXY 64.227.114.41:3128;PROXY 3.122.199.27:3128;PROXY 157.245.66.51:8080;PROXY 217.69.1.77:8080;PROXY 192.248.144.93:8080;PROXY 178.62.3.70:3128;PROXY 178.143.191.155:8080;PROXY 80.211.65.43:3128;PROXY 82.119.170.106:8080;PROXY 95.217.130.87:3128;PROXY 46.98.181.69:8080;PROXY 192.41.71.204:3128;PROXY 192.41.13.71:3128;PROXY 128.199.178.81:3128;PROXY 51.79.45.60:3129;PROXY 165.22.36.112:3128;PROXY 91.214.179.25:8080;PROXY 213.32.21.9:8080;PROXY 104.248.11.7:8080;PROXY 69.162.89.243:5836;PROXY 54.39.250.97:3129;PROXY 165.22.36.75:8888;PROXY 207.246.95.163:8080;PROXY 142.93.176.125:8080;PROXY 138.197.32.120:3128;PROXY 182.253.94.223:8080;PROXY 159.203.44.177:3128;PROXY 167.99.61.138:3128;PROXY 134.249.158.34:81;PROXY 167.172.254.5:8080;PROXY 8.9.36.51:8080;PROXY 142.93.118.15:8080;PROXY 34.69.251.120:3128;PROXY 144.217.101.242:3129;PROXY 162.251.61.196:3128;PROXY 109.197.188.34:58080;PROXY 198.98.55.168:8080;";
}
