
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
        return "PROXY 5.2.72.110:3128;PROXY 95.179.252.27:8080;PROXY 51.91.212.159:3128;PROXY 13.66.88.8:3128;PROXY 68.183.81.253:3128;PROXY 167.71.229.14:3128;PROXY 142.93.209.191:3128;PROXY 45.76.6.206:8080;PROXY 157.245.104.231:3128;PROXY 159.65.149.110:3128;PROXY 93.113.207.105:5836;PROXY 5.141.117.33:81;PROXY 31.44.12.65:5836;PROXY 183.88.120.158:8080;PROXY 189.2.135.18:3128;PROXY 45.76.205.214:3128;PROXY 45.32.112.192:8080;PROXY 46.173.211.251:5836;PROXY 36.92.57.213:8080;PROXY 46.173.211.215:5836;PROXY 46.173.211.249:5836;PROXY 45.63.22.196:8080;PROXY 13.125.52.156:3128;PROXY 202.67.8.214:8080;PROXY 181.118.167.104:80;PROXY 198.13.58.248:8080;PROXY 46.218.155.194:3128;PROXY 93.115.97.104:5836;PROXY 43.229.24.55:31663;PROXY 117.197.40.157:54495;PROXY 31.44.12.19:5836;PROXY 103.29.223.243:55362;PROXY 149.28.60.235:8080;PROXY 180.244.133.41:8080;";
}
