
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
        return "PROXY 51.75.147.41:3128;PROXY 95.174.67.50:18080;PROXY 78.47.4.33:3129;PROXY 51.75.147.43:3128;PROXY 52.179.18.244:8080;PROXY 159.203.44.177:3128;PROXY 103.143.192.221:8080;PROXY 61.247.53.213:8080;PROXY 5.182.20.253:3128;PROXY 150.95.178.151:8888;PROXY 200.255.122.170:8080;PROXY 116.58.232.145:8080;PROXY 186.225.110.166:8080;PROXY 118.27.18.60:8081;PROXY 91.214.179.5:8080;PROXY 139.162.109.91:3128;PROXY 102.130.122.165:8080;PROXY 117.222.60.223:8080;";
}
