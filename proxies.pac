
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
        return "PROXY 51.75.147.44:3128;PROXY 51.75.206.45:3128;PROXY 139.28.152.60:80;PROXY 161.97.92.35:3128;PROXY 85.113.39.89:81;PROXY 62.171.177.113:8888;PROXY 80.90.80.54:8080;PROXY 159.203.44.177:3128;PROXY 213.80.237.142:3128;PROXY 45.62.216.124:3128;PROXY 51.161.116.223:3128;PROXY 158.69.22.224:3128;PROXY 45.32.64.33:3128;PROXY 52.179.18.244:8080;PROXY 45.76.52.195:8081;PROXY 45.76.150.145:8081;PROXY 186.211.177.161:8082;PROXY 35.185.16.35:80;PROXY 181.119.158.1:3128;PROXY 134.249.134.41:3128;PROXY 191.102.232.130:3128;";
}
