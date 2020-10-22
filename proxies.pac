
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
        return "PROXY 195.201.113.108:3128;PROXY 95.217.186.24:3128;PROXY 91.214.179.5:8080;PROXY 52.179.18.244:8080;PROXY 104.211.230.17:3128;PROXY 211.204.50.10:3128;PROXY 181.119.158.1:3128;PROXY 194.5.188.193:3128;PROXY 181.119.69.153:3128;PROXY 82.200.233.4:3128;PROXY 47.254.151.148:8080;PROXY 159.203.44.177:3128;PROXY 192.41.13.71:3128;PROXY 35.185.16.35:80;";
}
