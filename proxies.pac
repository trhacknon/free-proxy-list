
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
        return "PROXY 95.217.186.24:3128;PROXY 54.172.195.251:3128;PROXY 159.203.44.177:3128;PROXY 52.179.18.244:8080;PROXY 104.42.122.91:3128;PROXY 158.69.22.224:3128;PROXY 24.112.100.126:3128;PROXY 207.74.82.103:8080;PROXY 103.35.132.186:83;PROXY 121.244.213.181:8080;PROXY 186.211.177.161:8082;PROXY 45.76.52.195:8081;PROXY 185.20.224.239:3128;PROXY 103.35.64.12:3128;PROXY 187.86.71.145:8080;PROXY 183.89.126.108:8081;PROXY 59.120.73.33:8080;PROXY 202.147.206.98:8080;PROXY 193.53.87.215:3128;PROXY 193.208.82.79:3128;";
}
