
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
        return "PROXY 85.14.243.31:3128;PROXY 95.217.186.24:3128;PROXY 91.214.179.5:8080;PROXY 52.179.18.244:8080;PROXY 51.161.116.223:3128;PROXY 45.82.73.88:3128;PROXY 23.227.199.114:3128;PROXY 92.244.99.229:3128;PROXY 45.159.115.56:3128;PROXY 103.35.64.12:3128;PROXY 144.217.101.245:3129;PROXY 198.50.163.192:3129;PROXY 35.185.16.35:80;PROXY 186.211.177.161:8082;PROXY 13.251.221.173:8080;PROXY 51.75.147.41:3128;PROXY 194.5.188.193:3128;PROXY 181.119.158.1:3128;PROXY 85.113.39.89:81;PROXY 51.75.147.33:3128;PROXY 124.121.2.132:8080;";
}
