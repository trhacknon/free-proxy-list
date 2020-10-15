
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
        return "PROXY 85.14.243.31:3128;PROXY 80.90.80.54:8080;PROXY 54.152.155.155:3128;PROXY 51.161.116.223:3128;PROXY 52.179.18.244:8080;PROXY 158.69.22.224:3128;PROXY 45.32.64.33:3128;PROXY 151.248.126.76:3128;PROXY 194.5.188.193:3128;PROXY 186.211.177.161:8082;PROXY 198.50.163.192:3129;PROXY 92.244.99.229:3128;PROXY 181.119.69.153:3128;PROXY 181.119.158.1:3128;PROXY 202.69.48.122:3128;PROXY 45.139.203.85:3128;PROXY 13.251.221.173:8080;PROXY 45.70.106.120:55443;";
}
