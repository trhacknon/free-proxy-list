
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
        return "PROXY 49.12.75.192:3128;PROXY 104.244.77.254:8080;PROXY 104.238.158.134:8080;PROXY 167.71.138.227:80;PROXY 134.122.99.38:3128;PROXY 5.2.72.101:3128;PROXY 209.250.243.70:8080;PROXY 163.172.190.160:8811;PROXY 51.158.123.35:8811;PROXY 185.137.232.95:80;PROXY 95.179.198.147:8080;PROXY 3.87.224.78:3128;PROXY 68.183.20.132:3128;PROXY 159.65.237.95:3128;PROXY 80.90.80.54:8080;PROXY 140.82.61.253:8080;PROXY 167.99.224.171:3128;PROXY 104.248.227.113:3128;PROXY 68.183.20.95:3128;PROXY 167.99.228.178:3128;PROXY 52.179.18.244:8080;PROXY 198.98.56.71:8080;PROXY 149.248.44.107:8080;PROXY 13.67.69.62:3128;PROXY 91.214.179.25:8080;PROXY 149.248.59.26:8080;PROXY 45.32.228.170:8080;PROXY 137.220.37.239:8080;PROXY 137.220.38.184:8080;PROXY 137.220.39.17:8080;PROXY 159.203.44.177:3128;PROXY 137.220.39.123:8080;PROXY 137.220.40.118:8080;PROXY 137.220.39.99:8080;PROXY 45.76.187.33:8080;PROXY 45.32.229.109:8080;PROXY 178.128.82.208:8080;PROXY 66.42.48.253:8080;PROXY 13.67.68.20:3128;PROXY 178.128.28.29:8080;PROXY 51.158.165.18:8811;PROXY 45.76.145.19:8080;PROXY 157.230.33.138:8080;PROXY 165.22.211.212:3128;PROXY 45.76.189.225:8080;PROXY 165.22.53.162:8080;PROXY 45.32.111.75:8080;";
}
