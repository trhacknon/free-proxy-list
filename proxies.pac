
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
        return "PROXY 136.243.47.220:3128;PROXY 54.171.117.85:3128;PROXY 52.191.103.11:3128;PROXY 178.254.138.154:8888;PROXY 52.179.18.244:8080;PROXY 159.203.44.177:3128;PROXY 185.117.9.210:8080;PROXY 157.230.155.18:10492;PROXY 144.217.101.245:3129;PROXY 189.2.135.18:3128;PROXY 61.247.16.141:8080;PROXY 203.204.200.107:443;PROXY 188.165.16.230:3129;PROXY 36.92.57.213:8080;PROXY 80.90.80.54:8080;PROXY 82.200.233.4:3128;PROXY 51.255.103.170:3129;PROXY 145.239.121.218:3129;PROXY 167.86.66.161:3128;PROXY 85.113.39.89:81;PROXY 18.236.84.161:52837;";
}
