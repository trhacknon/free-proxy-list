
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
        return "PROXY 167.99.140.96:3128;PROXY 104.248.93.66:8080;PROXY 91.214.179.5:8080;PROXY 165.22.36.75:8888;PROXY 103.35.64.12:3128;PROXY 1.255.48.197:8080;PROXY 85.113.39.89:81;PROXY 167.71.142.240:8080;PROXY 186.211.177.161:8082;PROXY 159.89.89.224:8080;PROXY 185.214.164.111:3128;PROXY 46.246.14.6:3128;PROXY 157.245.69.232:8080;PROXY 181.119.158.1:3128;";
}
