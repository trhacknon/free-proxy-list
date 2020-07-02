
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
        return "PROXY 95.179.235.253:8080;PROXY 37.120.161.249:3128;PROXY 159.89.90.117:3128;PROXY 64.227.16.194:3128;PROXY 159.203.44.177:3128;PROXY 18.220.1.250:3128;PROXY 40.85.228.229:8080;PROXY 45.76.243.250:8080;PROXY 45.77.211.103:8080;PROXY 104.44.132.216:8080;PROXY 45.43.63.199:80;PROXY 202.67.8.214:8080;PROXY 191.232.208.70:3128;PROXY 64.188.3.162:3128;PROXY 51.195.45.230:8080;PROXY 150.95.178.151:8888;PROXY 85.113.39.89:81;PROXY 149.28.178.201:8080;PROXY 45.77.48.99:3128;PROXY 45.32.226.218:8080;PROXY 199.217.117.41:5836;PROXY 51.158.119.88:8811;PROXY 51.158.119.88:8761;PROXY 157.245.29.19:8080;PROXY 36.92.57.213:8080;PROXY 223.205.75.51:8080;PROXY 45.63.56.83:8080;";
}
