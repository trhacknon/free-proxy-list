
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
        return "PROXY 3.96.208.91:3128;PROXY 80.90.80.54:8080;PROXY 173.37.55.62:8080;PROXY 103.212.69.50:3128;PROXY 52.247.248.30:8080;PROXY 188.64.185.80:3128;PROXY 1.10.238.127:8080;PROXY 183.89.155.37:8080;PROXY 14.139.107.211:3128;PROXY 51.161.116.223:3128;PROXY 45.122.245.141:3128;PROXY 192.41.13.71:3128;PROXY 109.208.132.53:3128;PROXY 181.119.158.1:3128;PROXY 91.214.179.5:8080;PROXY 176.114.42.60:8888;PROXY 181.119.69.153:3128;PROXY 167.250.65.246:8080;";
}
