
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
        return "PROXY 45.32.235.154:8080;PROXY 104.244.75.26:8080;PROXY 185.92.222.126:8080;PROXY 136.244.102.38:8080;PROXY 161.35.66.242:3128;PROXY 51.91.212.159:3128;PROXY 136.244.107.186:8080;PROXY 213.136.78.253:5836;PROXY 185.208.172.252:3128;PROXY 51.254.104.83:3190;PROXY 45.32.1.70:8080;PROXY 52.179.18.244:8080;PROXY 206.81.10.180:10492;PROXY 52.191.103.11:3128;PROXY 178.162.194.7:5836;PROXY 80.211.72.61:3128;PROXY 68.183.124.45:8080;PROXY 159.203.44.177:3128;PROXY 35.225.152.98:3128;PROXY 93.118.32.243:5836;PROXY 34.67.11.156:3128;PROXY 194.5.207.66:3128;PROXY 176.112.157.11:5836;PROXY 51.158.119.88:8811;PROXY 45.77.175.11:8080;PROXY 45.76.186.158:8080;PROXY 54.169.9.36:3128;PROXY 157.230.165.31:10492;PROXY 165.22.213.55:3128;PROXY 13.76.155.160:3128;PROXY 189.2.135.18:3128;PROXY 49.48.95.154:8080;PROXY 103.28.121.58:80;PROXY 36.92.57.213:8080;PROXY 13.231.212.154:3838;PROXY 3.34.215.177:3128;PROXY 34.91.135.38:80;PROXY 113.196.140.162:8888;PROXY 46.165.239.27:5836;PROXY 103.86.135.2:8191;PROXY 45.77.45.70:8080;";
}
