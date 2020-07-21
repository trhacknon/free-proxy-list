
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
        return "PROXY 95.179.155.215:8080;PROXY 95.179.178.172:8080;PROXY 139.59.129.114:3128;PROXY 80.90.80.54:8080;PROXY 5.141.117.33:81;PROXY 159.203.44.177:3128;PROXY 137.220.34.109:8080;PROXY 202.67.8.214:8080;PROXY 118.173.59.45:8080;PROXY 189.2.135.18:3128;PROXY 173.212.243.187:3128;PROXY 185.242.182.121:3128;PROXY 144.217.101.245:3129;PROXY 209.250.248.128:8080;PROXY 180.183.131.103:8080;PROXY 196.43.180.10:3128;PROXY 186.211.177.161:8082;PROXY 45.76.36.152:8080;PROXY 140.82.47.183:33081;PROXY 203.69.180.135:80;";
}
