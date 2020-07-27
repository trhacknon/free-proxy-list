
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
        return "PROXY 139.59.137.228:8888;PROXY 51.158.119.88:8811;PROXY 51.158.119.88:8761;PROXY 136.243.47.220:3128;PROXY 45.32.124.121:8080;PROXY 93.188.167.189:3128;PROXY 54.190.17.69:80;PROXY 128.199.214.87:3128;PROXY 191.235.65.212:80;PROXY 118.99.103.30:8080;PROXY 189.2.135.18:3128;PROXY 144.217.101.245:3129;PROXY 72.255.38.246:3128;PROXY 52.179.18.244:8080;PROXY 14.139.107.211:3128;PROXY 5.141.117.33:81;";
}
