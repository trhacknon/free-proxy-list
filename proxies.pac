
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
        return "PROXY 85.14.243.31:3128;PROXY 62.171.177.80:3128;PROXY 80.90.80.54:8080;PROXY 91.214.179.5:8080;PROXY 92.244.99.229:3128;PROXY 85.113.39.89:81;PROXY 51.178.137.159:3128;PROXY 95.217.186.24:3128;PROXY 45.159.115.56:3128;PROXY 186.211.177.161:8082;PROXY 194.5.188.193:3128;PROXY 1.255.48.197:8080;PROXY 180.248.28.161:3128;PROXY 185.117.9.210:8080;PROXY 51.223.203.111:8080;PROXY 181.119.69.153:3128;PROXY 62.171.177.113:8888;PROXY 159.203.44.177:3128;PROXY 35.185.16.35:80;";
}
