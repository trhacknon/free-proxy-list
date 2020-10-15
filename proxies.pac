
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
        return "PROXY 85.14.243.31:3128;PROXY 40.91.229.135:3128;PROXY 34.105.228.176:3128;PROXY 172.98.77.187:3128;PROXY 194.5.188.193:3128;PROXY 36.68.26.79:8080;PROXY 183.89.103.76:8080;PROXY 117.247.190.141:80;PROXY 60.48.71.220:8080;PROXY 186.211.177.161:8082;PROXY 46.246.84.72:8080;PROXY 13.74.96.14:3128;PROXY 45.139.203.85:3128;PROXY 202.69.48.122:3128;PROXY 91.214.179.5:8080;";
}
