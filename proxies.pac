
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
        return "PROXY 85.14.243.31:3128;PROXY 18.134.0.219:80;PROXY 216.250.236.11:3128;PROXY 104.149.139.206:3128;PROXY 14.143.168.230:8080;PROXY 13.114.239.23:80;PROXY 101.109.104.175:8080;PROXY 124.122.52.234:8080;PROXY 13.251.221.173:8080;PROXY 210.212.227.70:3128;PROXY 1.255.48.197:8080;PROXY 35.185.16.35:80;PROXY 194.5.188.193:3128;PROXY 161.97.100.134:3838;PROXY 85.25.15.211:3838;PROXY 103.10.54.93:8080;PROXY 202.147.206.98:8080;PROXY 171.6.75.160:8080;PROXY 51.75.147.43:3128;PROXY 51.75.147.41:3128;PROXY 80.23.125.226:3128;";
}
