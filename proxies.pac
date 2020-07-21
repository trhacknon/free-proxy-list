
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
        return "PROXY 136.243.47.220:3128;PROXY 104.244.77.254:8080;PROXY 95.179.182.151:8080;PROXY 139.59.129.114:3128;PROXY 45.76.36.152:8080;PROXY 80.240.24.62:8080;PROXY 95.179.165.80:8080;PROXY 95.179.178.172:8080;PROXY 34.91.135.38:80;PROXY 217.69.9.154:8080;PROXY 167.86.66.161:3128;PROXY 51.15.181.27:5836;PROXY 89.163.223.162:8888;PROXY 95.179.155.215:8080;PROXY 95.216.10.19:3128;PROXY 213.48.68.10:8888;PROXY 80.90.80.54:8080;PROXY 93.115.96.29:5836;PROXY 185.184.208.155:5836;PROXY 134.249.158.34:81;PROXY 149.28.50.175:8080;PROXY 213.6.204.145:45399;PROXY 52.191.103.11:3128;PROXY 145.239.121.218:3129;PROXY 188.165.16.230:3129;PROXY 18.217.86.213:3128;PROXY 66.42.75.203:8080;PROXY 137.220.34.109:8080;PROXY 51.255.103.170:3129;PROXY 45.76.187.143:8080;PROXY 178.128.211.134:6868;PROXY 139.180.184.112:8080;PROXY 198.98.54.241:8080;PROXY 157.230.155.18:10492;PROXY 159.203.44.177:3128;PROXY 202.67.8.214:8080;PROXY 144.217.101.245:3129;PROXY 52.179.18.244:8080;PROXY 128.199.214.87:3128;PROXY 128.199.151.20:8080;PROXY 103.139.103.33:3129;PROXY 183.89.46.174:8080;PROXY 128.199.149.7:8080;PROXY 189.2.135.18:3128;PROXY 186.211.177.161:8082;PROXY 1.64.75.130:3128;PROXY 36.92.57.213:8080;PROXY 103.28.121.58:3128;";
}
