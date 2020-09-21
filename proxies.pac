
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
        return "PROXY 104.244.77.254:8080;PROXY 95.174.67.50:18080;PROXY 198.98.54.241:8080;PROXY 198.98.58.178:8080;PROXY 185.117.9.210:8080;PROXY 128.199.214.87:3128;PROXY 167.250.65.246:8080;PROXY 186.211.177.161:8082;PROXY 36.92.57.213:8080;PROXY 14.140.131.82:3128;";
}
