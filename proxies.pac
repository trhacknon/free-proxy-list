
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
        return "PROXY 51.91.212.159:3128;PROXY 62.171.177.80:3129;PROXY 64.188.3.162:3128;PROXY 52.179.18.244:8080;PROXY 186.211.177.161:8082;PROXY 36.92.57.213:8080;PROXY 34.91.135.38:80;PROXY 178.33.251.230:3129;PROXY 85.113.39.89:81;PROXY 79.137.44.85:3129;PROXY 103.28.121.58:3128;PROXY 4.14.219.157:3128;PROXY 103.28.121.58:80;PROXY 185.117.9.210:8080;PROXY 177.69.203.77:3128;PROXY 5.141.117.33:81;PROXY 51.254.104.83:3190;PROXY 203.69.180.135:80;";
}
