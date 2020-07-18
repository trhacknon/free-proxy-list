
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
        return "PROXY 136.243.47.220:3128;PROXY 51.91.212.159:3128;PROXY 52.179.18.244:8080;PROXY 51.254.237.77:3129;PROXY 159.203.44.177:3128;PROXY 13.75.114.68:25222;PROXY 128.199.214.87:3128;PROXY 14.207.0.88:8080;PROXY 125.26.199.178:8080;PROXY 180.183.130.214:8080;PROXY 189.2.135.18:3128;PROXY 202.67.8.214:8080;PROXY 180.241.153.88:80;PROXY 104.45.188.43:3128;";
}
