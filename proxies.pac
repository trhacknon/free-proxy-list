
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
        return "PROXY 136.243.47.220:3128;PROXY 158.177.252.170:3128;PROXY 68.183.35.53:3128;PROXY 138.201.104.133:3128;PROXY 213.48.68.10:8888;PROXY 95.179.182.151:8080;PROXY 176.99.6.235:5836;PROXY 45.77.76.254:8080;PROXY 18.212.106.48:8888;PROXY 198.98.58.62:8080;PROXY 159.203.44.177:3128;PROXY 52.179.18.244:8080;PROXY 139.180.129.39:8080;PROXY 107.182.235.6:3128;PROXY 149.28.146.2:8888;PROXY 206.189.150.237:3128;PROXY 104.244.77.254:8080;PROXY 185.213.21.51:3128;PROXY 101.255.134.166:8080;PROXY 128.199.214.87:3128;PROXY 191.235.72.244:80;PROXY 191.235.98.22:80;PROXY 191.239.247.125:3128;PROXY 189.2.135.18:3128;PROXY 178.19.105.38:5836;PROXY 134.249.158.34:81;PROXY 36.92.57.213:8080;PROXY 103.21.150.184:3128;PROXY 200.255.122.170:8080;PROXY 36.78.195.142:8080;PROXY 144.217.101.245:3129;PROXY 202.67.8.214:8080;PROXY 180.183.134.27:8080;PROXY 66.42.51.139:8080;PROXY 205.185.115.100:8080;PROXY 217.163.29.198:8080;PROXY 52.191.103.11:3128;";
}
