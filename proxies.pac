
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
        return "PROXY 51.255.103.170:3129;PROXY 188.165.16.230:3129;PROXY 188.166.53.57:8080;PROXY 178.62.110.236:8080;PROXY 51.158.186.242:8811;PROXY 51.158.172.165:8811;PROXY 163.172.190.160:8811;PROXY 51.91.212.159:3128;PROXY 51.158.98.121:8811;PROXY 91.214.179.25:8080;PROXY 5.141.117.33:81;PROXY 157.245.251.117:8080;PROXY 51.158.165.18:8811;PROXY 8.9.8.232:8080;PROXY 159.203.44.177:3128;PROXY 149.28.143.179:8080;PROXY 104.248.149.205:8080;PROXY 167.71.195.139:8080;PROXY 149.28.132.179:8080;";
}
