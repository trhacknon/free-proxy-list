
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
        return "PROXY 85.14.243.31:3128;PROXY 40.91.229.135:3128;PROXY 176.9.85.13:3128;PROXY 165.232.37.59:8080;PROXY 46.101.120.155:8080;PROXY 95.217.186.24:3128;PROXY 135.181.36.161:8888;PROXY 51.75.74.162:8080;PROXY 92.244.99.229:3128;PROXY 45.153.249.3:3128;PROXY 134.122.121.4:8080;PROXY 2.56.215.247:3128;PROXY 51.161.116.223:3128;PROXY 159.203.44.177:3128;PROXY 216.250.236.10:3128;PROXY 161.35.59.6:8080;PROXY 159.65.134.244:8080;PROXY 104.149.139.206:3128;PROXY 104.248.159.109:8080;PROXY 157.245.160.198:8080;PROXY 178.128.118.8:8080;PROXY 128.199.183.34:8080;PROXY 159.89.200.80:8080;PROXY 178.128.54.44:8080;PROXY 128.199.119.164:8080;PROXY 167.99.76.67:8080;PROXY 192.41.13.71:3128;PROXY 128.199.169.61:8080;PROXY 210.212.128.241:8080;PROXY 23.237.74.98:3128;PROXY 191.234.175.56:8080;PROXY 103.35.64.12:3128;PROXY 128.199.64.10:8080;PROXY 54.248.233.247:3128;PROXY 181.119.69.153:3128;PROXY 185.117.9.210:8080;PROXY 35.185.16.35:80;PROXY 181.119.158.1:3128;PROXY 120.89.90.234:8080;PROXY 128.199.210.225:8080;";
}
