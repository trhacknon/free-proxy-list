
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
        return "PROXY 95.174.67.50:18080;PROXY 91.214.179.5:8080;PROXY 80.90.80.54:8080;PROXY 198.98.58.178:8080;PROXY 51.75.147.33:3128;PROXY 185.117.9.210:8080;PROXY 128.199.214.87:3128;PROXY 167.250.65.246:8080;PROXY 186.211.177.161:8082;PROXY 181.119.158.1:3128;PROXY 200.52.77.36:80;PROXY 14.140.131.82:3128;";
}
