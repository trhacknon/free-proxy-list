
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
        return "PROXY 85.14.243.31:3128;PROXY 95.217.186.24:3128;PROXY 80.90.80.54:8080;PROXY 194.5.188.193:3128;PROXY 123.201.23.2:8080;PROXY 103.35.64.12:3128;PROXY 52.179.18.244:8080;PROXY 185.117.9.210:8080;PROXY 91.214.179.5:8080;PROXY 35.185.16.35:80;PROXY 181.119.69.153:3128;";
}
