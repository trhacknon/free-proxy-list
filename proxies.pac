
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
        return "PROXY 5.167.240.221:8080;PROXY 95.216.196.233:3128;PROXY 85.14.243.31:3128;PROXY 207.154.203.187:3128;PROXY 81.218.45.161:8080;PROXY 216.250.236.10:3128;PROXY 159.203.44.177:3128;PROXY 161.97.84.211:3128;PROXY 198.12.253.103:3128;PROXY 64.137.175.85:3128;PROXY 192.41.13.71:3128;PROXY 139.162.41.150:80;PROXY 104.149.139.206:3128;PROXY 51.223.197.77:8080;PROXY 182.253.170.13:8080;PROXY 101.108.121.46:8080;PROXY 1.20.196.197:8080;PROXY 35.185.16.35:80;PROXY 1.2.188.227:8080;PROXY 1.0.190.76:8080;PROXY 36.78.217.229:8080;PROXY 171.6.75.32:8080;PROXY 23.237.74.98:3128;PROXY 1.0.213.128:8080;PROXY 183.89.42.241:8080;PROXY 181.198.87.218:3128;PROXY 202.148.12.75:80;PROXY 171.100.86.59:8080;PROXY 180.183.1.59:8080;PROXY 36.82.189.15:80;PROXY 183.89.149.63:8080;PROXY 115.87.245.206:8080;PROXY 110.78.147.136:8080;PROXY 110.78.23.194:3128;PROXY 36.74.208.22:80;PROXY 194.143.250.197:8080;PROXY 175.144.33.158:8080;PROXY 138.204.71.236:8080;PROXY 51.75.147.41:3128;";
}
