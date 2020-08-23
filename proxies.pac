
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
        return "PROXY 51.89.32.83:3128;PROXY 51.161.116.223:3128;PROXY 159.203.44.177:3128;PROXY 18.139.207.79:80;PROXY 157.230.242.253:3128;PROXY 157.230.155.18:10492;PROXY 173.212.243.245:8080;PROXY 91.214.179.5:8080;PROXY 52.179.18.244:8080;PROXY 185.117.9.210:8080;PROXY 144.217.101.245:3129;PROXY 80.90.80.54:8080;PROXY 14.140.131.82:3128;PROXY 195.222.149.182:8080;PROXY 64.71.145.122:3128;";
}
