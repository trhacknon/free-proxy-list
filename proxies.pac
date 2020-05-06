
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
        return "PROXY 80.90.80.54:8080;PROXY 134.249.158.34:81;PROXY 51.158.68.68:8811;PROXY 109.197.188.34:58080;PROXY 165.22.105.244:3128;PROXY 165.22.255.192:3128;PROXY 128.199.85.5:3128;PROXY 202.67.8.214:8080;PROXY 202.58.205.196:8080;PROXY 185.117.9.210:8080;PROXY 163.172.136.226:8811;PROXY 5.141.117.33:81;PROXY 185.8.2.242:8080;PROXY 36.92.57.213:8080;PROXY 173.249.28.223:5836;PROXY 213.32.21.9:8080;PROXY 203.69.180.135:80;PROXY 117.1.16.131:8080;PROXY 79.106.97.66:8080;PROXY 51.158.154.43:5836;PROXY 190.111.231.8:8080;";
}
