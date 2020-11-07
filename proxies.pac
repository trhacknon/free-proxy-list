
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
        return "PROXY 23.146.144.156:3128;PROXY 183.88.90.212:8080;PROXY 118.99.95.152:8080;PROXY 168.181.196.76:8080;PROXY 36.91.97.68:8080;PROXY 181.119.158.1:3128;PROXY 181.119.69.153:3128;PROXY 103.69.45.235:8080;PROXY 91.214.179.5:8080;PROXY 146.88.36.27:8080;PROXY 183.89.149.18:8080;PROXY 176.9.85.13:3128;PROXY 66.251.179.134:8080;PROXY 80.90.80.54:8080;";
}
