
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
        return "PROXY 95.179.249.113:8080;PROXY 104.244.75.26:8080;PROXY 108.61.176.135:8080;PROXY 3.126.206.94:3128;PROXY 169.51.52.227:3128;PROXY 136.244.106.199:8080;PROXY 176.9.63.62:3128;PROXY 167.71.61.177:3128;PROXY 49.12.75.192:3128;PROXY 51.91.212.159:3128;PROXY 82.119.170.106:8080;PROXY 151.80.199.89:3128;PROXY 95.179.246.17:8080;PROXY 5.189.188.95:3128;PROXY 169.51.80.228:3128;PROXY 45.76.47.112:8080;PROXY 163.172.190.160:8811;PROXY 178.238.232.35:5836;PROXY 51.158.98.121:8811;PROXY 51.158.172.165:8811;PROXY 198.98.56.71:8080;PROXY 134.249.158.34:81;PROXY 159.203.44.177:3128;PROXY 52.179.18.244:8080;PROXY 91.214.179.25:8080;PROXY 45.76.160.140:8080;PROXY 45.76.178.182:8080;PROXY 139.180.154.9:8080;PROXY 45.76.157.40:8080;PROXY 212.22.95.35:3128;PROXY 18.222.135.64:3128;PROXY 167.172.6.211:3128;PROXY 64.225.24.13:3128;PROXY 13.67.44.44:3128;PROXY 54.184.22.115:3128;PROXY 13.57.222.81:80;PROXY 51.158.119.88:8811;PROXY 52.163.87.222:8080;PROXY 51.158.123.35:8811;PROXY 117.121.213.52:3128;PROXY 37.59.61.18:8080;PROXY 51.255.103.170:3129;PROXY 145.239.121.218:3129;PROXY 207.148.124.145:8080;PROXY 202.67.8.214:8080;PROXY 189.2.135.18:3128;PROXY 202.58.205.196:8080;";
}
