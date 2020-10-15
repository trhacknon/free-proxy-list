
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
        return "PROXY 185.20.224.239:3128;PROXY 40.91.229.135:3128;PROXY 51.195.34.119:8080;PROXY 159.203.44.177:3128;PROXY 51.75.147.35:3128;PROXY 94.45.140.132:3128;PROXY 51.161.116.223:3128;PROXY 79.140.30.186:3128;PROXY 52.179.18.244:8080;PROXY 45.32.64.33:3128;PROXY 103.35.64.12:3128;PROXY 54.233.120.113:8080;PROXY 207.74.82.103:8080;PROXY 45.76.52.195:8081;PROXY 201.44.1.36:3128;PROXY 193.53.87.215:3128;PROXY 150.95.153.41:3128;PROXY 35.185.16.35:80;PROXY 202.147.206.98:8080;PROXY 85.14.243.31:3128;";
}
