
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
        return "PROXY 51.89.32.83:3128;PROXY 176.9.63.62:3128;PROXY 51.143.178.193:3128;PROXY 51.75.160.176:9999;PROXY 159.203.44.177:3128;PROXY 128.199.214.87:3128;PROXY 157.230.165.31:10492;PROXY 91.214.179.5:8080;PROXY 210.212.227.66:3128;PROXY 103.28.37.131:3128;PROXY 51.15.200.222:8080;PROXY 211.238.149.51:3128;PROXY 103.146.177.39:80;PROXY 115.21.249.130:3128;PROXY 34.72.12.158:3128;PROXY 202.69.48.122:3128;PROXY 146.88.36.179:8080;PROXY 165.22.36.112:3128;PROXY 159.65.14.50:3128;";
}
