
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
        return "PROXY 85.14.243.31:3128;PROXY 54.152.155.155:3128;PROXY 159.203.44.177:3128;PROXY 185.117.9.210:8080;PROXY 147.135.7.122:3128;PROXY 194.5.188.193:3128;PROXY 45.159.115.56:3128;PROXY 186.211.177.161:8082;PROXY 191.102.232.130:3128;PROXY 181.119.158.1:3128;PROXY 103.35.64.12:3128;PROXY 85.113.39.89:81;";
}
