
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
        return "PROXY 78.141.208.67:8080;PROXY 95.179.217.47:8080;PROXY 217.69.7.187:8080;PROXY 51.91.212.159:3128;PROXY 185.122.57.238:3128;PROXY 3.125.229.126:3128;PROXY 95.179.170.203:8080;PROXY 94.63.29.25:3128;PROXY 80.90.80.54:8080;PROXY 52.179.18.244:8080;PROXY 5.141.117.33:81;PROXY 91.214.179.25:8080;PROXY 185.117.9.210:8080;PROXY 159.203.44.177:3128;PROXY 107.155.56.235:80;PROXY 4.14.219.157:3128;PROXY 202.67.8.214:8080;PROXY 188.213.26.215:5836;PROXY 34.91.135.38:80;PROXY 36.92.57.213:8080;PROXY 105.112.8.53:3128;PROXY 113.196.140.162:8888;PROXY 198.98.50.164:8080;PROXY 195.178.102.138:5836;PROXY 51.89.166.147:8080;PROXY 139.99.90.186:8080;PROXY 64.188.3.162:3128;PROXY 95.179.216.194:8080;PROXY 103.28.121.58:80;PROXY 199.195.248.24:8080;PROXY 103.141.64.250:8191;PROXY 165.22.213.55:3128;PROXY 45.32.225.126:8080;PROXY 104.244.75.26:8080;";
}
