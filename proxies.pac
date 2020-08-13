
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
        return "PROXY 176.9.63.62:3128;PROXY 199.91.203.210:3128;PROXY 71.174.241.157:3128;PROXY 159.203.44.177:3128;PROXY 5.141.117.33:81;PROXY 191.235.98.23:3128;PROXY 46.218.155.194:3128;PROXY 85.113.39.89:81;PROXY 59.124.224.180:3128;PROXY 51.89.32.83:3128;PROXY 103.28.121.58:3128;PROXY 103.28.121.58:80;PROXY 1.64.75.130:3128;";
}
