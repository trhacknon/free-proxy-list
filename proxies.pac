
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
        return "PROXY 51.75.147.41:3128;PROXY 51.75.147.43:3128;PROXY 213.174.103.91:3128;PROXY 95.174.67.50:18080;PROXY 51.75.147.40:3128;PROXY 91.214.179.5:8080;PROXY 51.75.147.35:3128;PROXY 159.203.44.177:3128;PROXY 54.169.225.153:80;PROXY 167.71.199.231:3128;PROXY 165.22.211.212:3128;PROXY 14.140.131.82:3128;PROXY 2.88.17.107:8080;PROXY 103.28.37.131:3128;PROXY 150.95.115.224:3128;PROXY 191.233.194.88:8080;PROXY 191.233.194.88:3128;PROXY 125.25.33.115:8080;PROXY 191.233.198.18:80;PROXY 200.52.77.36:80;PROXY 36.90.27.78:8080;PROXY 34.87.19.218:8080;PROXY 180.253.64.145:8080;PROXY 140.238.17.59:80;PROXY 180.246.62.39:8080;PROXY 177.36.128.162:8080;PROXY 186.211.177.161:8082;PROXY 200.255.122.170:8080;PROXY 202.69.48.122:3128;PROXY 118.163.83.21:3128;PROXY 173.212.230.5:3128;PROXY 177.22.107.176:8080;PROXY 185.117.9.210:8080;PROXY 104.244.77.254:8080;PROXY 159.65.14.50:3128;";
}
