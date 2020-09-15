
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
        return "PROXY 95.174.67.50:18080;PROXY 198.98.54.241:8080;PROXY 198.98.58.178:8080;PROXY 185.117.9.210:8080;PROXY 128.199.214.87:3128;PROXY 159.203.44.177:3128;PROXY 36.92.57.213:8080;PROXY 103.146.177.39:80;PROXY 202.147.206.98:8080;";
}
