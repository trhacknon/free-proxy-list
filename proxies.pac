
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
        return "PROXY 185.189.112.186:3128;PROXY 80.240.27.110:8080;PROXY 95.179.216.64:3128;PROXY 51.195.137.2:8080;PROXY 51.158.111.242:8811;PROXY 163.172.190.160:8811;PROXY 46.218.155.194:3128;PROXY 51.158.172.165:8811;PROXY 51.15.103.91:5836;PROXY 163.172.146.119:8811;PROXY 195.133.48.134:5836;PROXY 51.158.70.105:5836;PROXY 194.87.234.179:5836;PROXY 134.249.158.34:81;PROXY 80.90.80.54:8080;PROXY 161.35.114.60:8080;PROXY 8.9.4.26:8080;PROXY 159.89.50.191:3128;PROXY 157.245.251.117:8080;PROXY 51.210.44.27:8080;PROXY 104.238.132.80:8080;PROXY 149.248.60.103:8080;PROXY 155.138.142.52:8080;PROXY 159.203.44.177:3128;PROXY 51.158.182.136:5836;PROXY 85.113.39.89:81;PROXY 149.28.151.154:3128;PROXY 139.180.138.186:8080;PROXY 149.28.132.30:8080;PROXY 178.128.82.208:8080;PROXY 128.199.128.242:8080;PROXY 45.32.117.83:3128;PROXY 157.230.33.138:8080;PROXY 167.71.201.161:8080;PROXY 46.255.98.236:41258;PROXY 51.158.98.121:8811;PROXY 45.32.120.171:8080;PROXY 149.28.130.17:8080;PROXY 205.185.127.8:8080;PROXY 167.71.195.139:8080;PROXY 45.63.51.251:8080;PROXY 51.158.111.229:8811;PROXY 139.180.159.51:8080;PROXY 66.42.58.234:8080;";
}
