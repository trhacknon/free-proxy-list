
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
        return "PROXY 18.197.140.73:80;PROXY 51.89.103.246:3128;PROXY 94.23.30.184:3128;PROXY 31.193.79.2:3128;PROXY 35.192.37.211:3128;PROXY 103.28.121.58:80;PROXY 167.250.65.246:8080;PROXY 103.28.121.58:3128;PROXY 59.124.224.180:3128;PROXY 186.211.177.161:8082;PROXY 219.102.153.182:8080;PROXY 95.179.188.220:31284;PROXY 185.70.105.127:5836;PROXY 159.203.44.177:3128;PROXY 37.120.168.223:8888;PROXY 130.61.95.193:3128;";
}
