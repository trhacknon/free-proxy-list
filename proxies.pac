
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
        return "PROXY 139.28.152.60:80;PROXY 159.203.44.177:3128;PROXY 85.113.39.89:81;PROXY 158.69.22.224:3128;PROXY 51.161.116.223:3128;PROXY 45.62.216.124:3128;PROXY 52.179.18.244:8080;PROXY 103.242.32.36:8080;PROXY 134.249.134.41:3128;PROXY 117.247.190.141:80;PROXY 150.95.153.41:3128;PROXY 35.185.16.35:80;PROXY 191.102.232.130:3128;PROXY 167.250.65.246:8080;";
}
