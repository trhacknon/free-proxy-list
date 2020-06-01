
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
        return "PROXY 104.244.75.26:8080;PROXY 188.166.53.57:8080;PROXY 195.201.31.20:3128;PROXY 51.158.186.242:8811;PROXY 51.91.212.159:3128;PROXY 80.90.80.54:8080;PROXY 5.141.117.33:81;PROXY 159.203.44.177:3128;PROXY 128.199.128.242:8080;PROXY 167.71.208.61:8080;PROXY 104.248.149.205:8080;PROXY 167.71.201.161:8080;PROXY 167.71.195.139:8080;PROXY 167.71.199.99:8080;";
}
