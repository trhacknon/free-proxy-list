
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
        return "PROXY 51.89.32.83:3128;PROXY 130.243.27.156:3128;PROXY 176.107.183.2:3128;PROXY 172.104.115.51:3128;PROXY 118.163.83.21:3128;PROXY 186.211.177.161:8082;PROXY 103.139.103.34:3133;PROXY 161.97.84.178:8080;PROXY 186.225.110.166:8080;PROXY 159.203.44.177:3128;PROXY 150.95.178.87:3128;PROXY 78.47.4.33:3129;PROXY 202.147.206.98:8080;PROXY 52.221.219.230:3128;PROXY 202.69.48.122:3128;PROXY 139.162.1.209:666;";
}
