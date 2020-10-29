
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
        return "PROXY 142.93.163.56:8080;PROXY 95.216.10.19:3128;PROXY 195.13.206.82:3128;PROXY 216.250.236.10:3128;PROXY 51.75.66.172:3129;PROXY 51.38.119.23:3129;PROXY 23.237.74.98:3128;PROXY 51.178.137.159:3128;PROXY 103.82.24.193:3128;PROXY 132.145.195.93:3128;PROXY 34.96.245.15:8080;PROXY 169.239.182.151:3128;PROXY 210.212.227.70:3128;PROXY 1.32.35.140:8080;";
}
