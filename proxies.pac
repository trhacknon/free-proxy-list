
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
        return "PROXY 45.76.42.210:33285;PROXY 51.178.165.3:3128;PROXY 185.119.58.8:5836;PROXY 94.102.2.145:3128;PROXY 68.183.188.100:3128;PROXY 157.230.155.18:10492;PROXY 103.28.37.131:3128;PROXY 189.2.135.18:3128;PROXY 1.255.48.197:8080;PROXY 159.203.44.177:3128;PROXY 15.206.50.74:3128;PROXY 95.211.196.30:5836;PROXY 54.36.112.227:3128;PROXY 167.250.65.246:8080;PROXY 209.141.46.133:8080;PROXY 196.43.180.10:3128;PROXY 51.83.248.155:3128;PROXY 185.184.208.202:5836;PROXY 198.98.54.241:8080;";
}
