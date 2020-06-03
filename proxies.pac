
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
        return "PROXY 188.165.16.230:3129;PROXY 104.244.75.26:8080;PROXY 104.244.77.254:8080;PROXY 178.62.110.236:8080;PROXY 51.158.186.242:8811;PROXY 163.172.190.160:8811;PROXY 51.91.212.159:3128;PROXY 51.158.98.121:8811;PROXY 80.90.80.54:8080;PROXY 91.214.179.25:8080;PROXY 5.141.117.33:81;PROXY 161.35.114.60:8080;PROXY 161.35.125.230:8080;PROXY 159.203.44.177:3128;PROXY 45.76.150.104:8080;PROXY 128.199.128.242:8080;PROXY 104.248.149.205:8080;PROXY 149.28.132.179:8080;";
}
