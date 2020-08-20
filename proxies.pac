
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
        return "PROXY 95.179.249.114:3128;PROXY 95.174.67.50:18080;PROXY 188.166.72.133:3128;PROXY 95.179.199.193:3128;PROXY 80.90.80.54:8080;PROXY 144.217.101.245:3129;PROXY 185.117.9.210:8080;PROXY 51.158.176.127:3128;PROXY 5.141.117.33:81;PROXY 162.251.167.75:3128;PROXY 128.199.205.219:3128;PROXY 101.108.116.132:8080;PROXY 103.139.103.34:3132;PROXY 191.234.173.39:3128;PROXY 191.235.78.164:8080;PROXY 103.139.103.33:3132;PROXY 200.73.132.107:8080;PROXY 150.95.178.151:8888;PROXY 61.5.11.74:8080;PROXY 13.212.15.103:3128;PROXY 139.99.61.56:8080;PROXY 71.174.241.161:3128;PROXY 186.211.177.161:8082;PROXY 119.42.121.47:8080;PROXY 43.242.38.53:30171;PROXY 186.225.110.166:8080;PROXY 61.7.191.148:8080;PROXY 128.199.182.25:3128;PROXY 109.236.91.168:5836;PROXY 183.88.190.175:8080;PROXY 95.179.191.153:3128;PROXY 147.75.109.175:3129;PROXY 52.251.120.221:3128;PROXY 80.23.125.226:3128;";
}
