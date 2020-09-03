
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
        return "PROXY 176.9.63.62:3128;PROXY 95.174.67.50:18080;PROXY 51.75.147.41:3128;PROXY 91.214.179.5:8080;PROXY 80.90.80.54:8080;PROXY 198.98.54.241:8080;PROXY 128.199.214.87:3128;PROXY 205.185.115.100:8080;PROXY 167.250.65.246:8080;PROXY 159.203.44.177:3128;PROXY 186.211.177.161:8082;PROXY 64.71.145.122:3128;PROXY 103.146.177.39:80;PROXY 200.255.122.170:8080;PROXY 181.119.158.1:3128;PROXY 200.52.77.36:80;PROXY 14.140.131.82:3128;PROXY 104.244.75.26:8080;PROXY 13.75.77.214:44355;";
}
