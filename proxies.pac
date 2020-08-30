
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
        return "PROXY 95.174.67.50:18080;PROXY 80.90.80.54:8080;PROXY 185.117.9.210:8080;PROXY 118.99.103.246:8080;PROXY 159.203.44.177:3128;PROXY 51.75.147.35:3128;PROXY 64.71.145.122:3128;PROXY 103.146.177.39:80;PROXY 200.255.122.170:8080;PROXY 51.158.76.180:3128;PROXY 181.119.158.1:3128;PROXY 86.124.130.141:3128;PROXY 14.140.131.82:3128;PROXY 202.147.206.98:8080;PROXY 13.75.77.214:44355;PROXY 52.179.18.244:8080;PROXY 51.75.147.43:3128;PROXY 144.217.101.245:3129;PROXY 118.163.83.21:3128;";
}
