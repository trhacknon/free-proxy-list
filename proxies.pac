
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
        return "PROXY 3.120.207.86:3128;PROXY 78.47.4.33:3129;PROXY 95.174.67.50:18080;PROXY 95.179.199.193:3128;PROXY 77.55.218.3:3128;PROXY 77.226.150.5:3128;PROXY 92.60.46.19:3128;PROXY 80.90.80.54:8080;PROXY 46.218.155.194:3128;PROXY 199.91.203.210:3128;PROXY 147.75.51.179:3128;PROXY 80.23.125.226:3128;PROXY 51.77.229.110:3128;PROXY 62.244.42.115:5836;PROXY 51.68.71.95:3128;PROXY 34.105.59.26:80;PROXY 185.117.9.210:8080;PROXY 178.128.211.134:6868;PROXY 157.230.155.18:10492;PROXY 202.157.185.89:9999;PROXY 54.214.52.181:80;PROXY 202.157.176.212:3128;PROXY 210.195.235.251:8080;PROXY 64.71.145.122:3128;PROXY 62.244.52.208:5836;PROXY 14.140.131.82:3128;PROXY 103.139.103.33:3133;PROXY 52.179.18.244:8080;PROXY 191.233.194.88:8080;PROXY 191.233.198.18:80;PROXY 144.217.101.245:3129;PROXY 89.223.28.195:3128;PROXY 183.89.115.14:8080;PROXY 1.255.48.197:8080;PROXY 45.76.219.111:3128;PROXY 202.147.206.98:8080;PROXY 103.28.121.58:3128;PROXY 45.77.48.99:3128;";
}
