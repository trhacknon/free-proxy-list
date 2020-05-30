
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
        return "PROXY 104.244.75.26:8080;PROXY 104.244.77.254:8080;PROXY 195.201.31.20:3128;PROXY 51.158.186.242:8811;PROXY 51.158.172.165:8811;PROXY 163.172.190.160:8811;PROXY 51.91.212.159:3128;PROXY 51.158.98.121:8811;PROXY 8.9.3.70:8080;PROXY 51.158.165.18:8811;PROXY 159.203.44.177:3128;PROXY 163.172.204.141:92;PROXY 149.28.143.179:8080;PROXY 128.199.128.242:8080;PROXY 165.22.48.123:3128;PROXY 165.22.107.35:3128;PROXY 167.71.192.96:3128;PROXY 167.71.201.161:8080;PROXY 178.128.28.29:8080;";
}
