
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
        return "PROXY 45.12.19.35:3128;PROXY 165.232.101.90:8080;PROXY 135.181.36.161:8888;PROXY 83.171.98.167:3128;PROXY 138.197.105.27:3128;PROXY 104.149.139.206:3128;PROXY 128.199.204.219:8080;PROXY 192.41.13.71:3128;PROXY 23.237.74.98:3128;PROXY 51.38.119.23:3129;PROXY 51.75.66.172:3129;PROXY 210.212.227.70:3128;PROXY 49.48.102.206:8080;PROXY 5.172.3.235:8080;PROXY 116.105.161.159:8080;PROXY 177.36.77.22:8080;";
}
