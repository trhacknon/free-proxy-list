
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
        return "PROXY 139.59.136.53:3128;PROXY 104.244.77.254:8080;PROXY 95.174.67.50:18080;PROXY 52.179.18.244:8080;PROXY 159.203.44.177:3128;PROXY 51.68.71.95:3128;PROXY 80.90.80.54:8080;PROXY 165.22.211.212:3128;PROXY 159.65.14.50:3128;PROXY 64.71.145.122:3128;PROXY 200.52.77.36:80;PROXY 13.75.77.214:44355;PROXY 103.28.37.131:3128;PROXY 186.211.177.161:8082;PROXY 180.183.27.229:3128;PROXY 144.76.232.49:3128;PROXY 202.147.206.98:8080;PROXY 91.214.179.5:8080;PROXY 51.75.147.41:3128;PROXY 181.119.158.1:3128;PROXY 36.90.231.67:8080;";
}
