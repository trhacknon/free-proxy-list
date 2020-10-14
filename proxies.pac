
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
        return "PROXY 51.75.147.44:3128;PROXY 158.69.22.224:3128;PROXY 45.32.64.33:3128;PROXY 51.161.116.223:3128;PROXY 186.211.177.161:8082;PROXY 202.147.206.98:8080;PROXY 103.242.32.36:8080;PROXY 150.95.153.41:3128;PROXY 213.80.237.142:3128;PROXY 200.187.161.11:3128;PROXY 104.198.125.34:3128;PROXY 189.112.82.29:3128;PROXY 13.251.221.173:8080;PROXY 181.119.69.153:3128;PROXY 59.124.224.180:3128;PROXY 85.113.39.89:81;PROXY 35.185.16.35:80;PROXY 45.76.150.145:8081;";
}
