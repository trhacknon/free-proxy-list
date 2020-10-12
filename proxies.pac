
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
        return "PROXY 91.214.179.5:8080;PROXY 52.179.18.244:8080;PROXY 159.203.44.177:3128;PROXY 51.161.116.223:3128;PROXY 85.113.39.89:81;PROXY 51.75.147.33:3128;PROXY 223.206.62.21:8080;PROXY 198.50.163.192:3129;PROXY 117.247.190.141:80;PROXY 210.212.227.70:3128;PROXY 125.164.50.31:8080;PROXY 181.119.158.1:3128;PROXY 181.119.69.153:3128;PROXY 185.117.9.210:8080;";
}
