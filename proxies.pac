
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
        return "PROXY 163.172.185.3:3128;PROXY 185.239.239.252:3128;PROXY 80.90.80.54:8080;PROXY 163.172.190.160:8811;PROXY 185.205.209.80:3128;PROXY 169.60.27.163:8080;PROXY 167.71.192.96:3128;PROXY 157.230.33.138:8080;PROXY 167.71.201.161:8080;PROXY 202.58.205.196:8080;PROXY 104.244.77.254:8080;PROXY 188.166.53.57:8080;PROXY 134.249.158.34:81;PROXY 161.35.114.60:8080;PROXY 15.165.112.193:3128;PROXY 197.216.2.14:8080;PROXY 45.76.150.104:8080;PROXY 45.63.51.251:8080;PROXY 104.248.149.205:8080;PROXY 178.128.82.208:8080;PROXY 103.255.238.148:3128;PROXY 163.172.146.119:8811;PROXY 51.158.123.35:8811;PROXY 5.252.177.213:3128;PROXY 51.158.98.121:8811;PROXY 180.210.201.57:3130;PROXY 128.199.128.242:8080;";
}
