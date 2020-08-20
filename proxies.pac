
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
        return "PROXY 104.248.139.76:1080;PROXY 94.23.30.184:3128;PROXY 161.35.156.192:8080;PROXY 95.174.67.50:18080;PROXY 45.76.44.68:3128;PROXY 212.237.35.203:3128;PROXY 152.26.66.140:3128;PROXY 159.203.44.177:3128;PROXY 161.35.0.103:1080;PROXY 104.248.48.173:1080;PROXY 185.117.9.210:8080;PROXY 92.60.46.19:3128;PROXY 199.91.203.210:3128;PROXY 207.148.67.18:8080;PROXY 172.105.42.219:666;PROXY 45.77.248.46:3128;PROXY 3.129.253.248:3128;PROXY 52.221.219.230:3128;PROXY 13.212.15.103:3128;PROXY 207.148.78.140:3128;PROXY 190.6.28.19:999;PROXY 91.214.179.5:8080;PROXY 181.129.154.30:999;PROXY 103.139.103.33:3132;PROXY 103.139.103.34:3132;PROXY 181.143.246.227:8080;PROXY 190.90.24.5:999;PROXY 45.77.241.22:3128;PROXY 119.42.121.47:8080;PROXY 191.234.173.39:3128;PROXY 183.89.59.84:8080;PROXY 1.0.132.251:8080;PROXY 186.211.177.161:8082;PROXY 45.76.219.111:3128;PROXY 125.167.63.205:8080;PROXY 180.254.57.184:8080;PROXY 36.90.25.54:8080;PROXY 104.45.188.43:3128;PROXY 14.207.14.39:8080;";
}
