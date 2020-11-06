
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
        return "PROXY 85.14.243.31:3128;PROXY 176.9.85.13:3128;PROXY 95.216.10.19:3128;PROXY 51.89.32.83:3128;PROXY 65.51.251.218:3128;PROXY 50.17.139.35:3128;PROXY 159.203.44.177:3128;PROXY 51.75.147.40:3128;PROXY 164.90.155.194:80;PROXY 173.37.55.62:8080;PROXY 67.205.135.209:8080;PROXY 157.230.247.57:3128;PROXY 1.255.48.197:8080;PROXY 128.199.64.10:8080;PROXY 198.50.163.192:3129;PROXY 216.37.138.177:3128;PROXY 82.200.233.4:3128;PROXY 104.211.230.17:3128;PROXY 83.48.15.142:3128;PROXY 62.171.177.80:3129;";
}
