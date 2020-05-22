
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
        return "PROXY 45.63.42.56:80;PROXY 45.32.159.125:8080;PROXY 167.172.42.145:8080;PROXY 163.172.185.3:3128;PROXY 95.179.245.169:8080;PROXY 45.76.85.249:8080;PROXY 51.158.123.250:8811;PROXY 51.158.123.35:8811;PROXY 51.158.111.229:8811;PROXY 136.244.83.128:8080;PROXY 51.158.68.133:8811;PROXY 68.183.35.53:3128;PROXY 161.35.218.192:3128;PROXY 45.77.88.84:8080;PROXY 199.247.12.82:8080;PROXY 95.179.133.237:8080;PROXY 199.247.22.183:8080;PROXY 51.158.111.242:8811;PROXY 163.172.190.160:8811;PROXY 192.248.148.31:8080;PROXY 51.15.80.136:3128;PROXY 51.158.98.121:8811;PROXY 163.172.146.119:8811;PROXY 51.158.108.135:8811;PROXY 51.158.107.202:8811;PROXY 178.62.110.236:8080;PROXY 95.179.129.228:8080;PROXY 213.32.21.9:8080;PROXY 45.32.238.187:8080;PROXY 51.158.186.242:8811;PROXY 51.158.176.154:5836;PROXY 51.158.172.165:8811;PROXY 51.15.106.213:5836;PROXY 51.158.123.52:3128;PROXY 51.158.163.159:5836;PROXY 46.218.155.194:3128;PROXY 162.251.61.196:3128;PROXY 80.90.80.54:8080;PROXY 51.158.165.18:8811;PROXY 45.77.222.251:3128;PROXY 138.197.32.120:3128;PROXY 51.158.68.26:8811;PROXY 51.158.119.88:8811;PROXY 165.22.36.75:8888;";
}
