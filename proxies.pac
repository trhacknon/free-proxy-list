
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
        return "PROXY 95.217.186.24:3128;PROXY 151.248.126.76:3128;PROXY 34.105.228.176:3128;PROXY 85.14.243.31:3128;PROXY 140.238.87.180:3128;PROXY 51.161.116.223:3128;PROXY 194.5.188.193:3128;PROXY 85.113.39.89:81;PROXY 103.35.64.12:3128;PROXY 45.139.203.85:3128;PROXY 191.102.232.130:3128;PROXY 117.247.190.141:80;PROXY 91.206.17.213:3128;PROXY 51.75.147.33:3128;";
}
