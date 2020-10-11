
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
        return "PROXY 85.113.39.89:81;PROXY 91.214.179.5:8080;PROXY 80.90.80.54:8080;PROXY 159.203.44.177:3128;PROXY 178.128.154.219:3070;PROXY 45.62.216.124:3128;PROXY 51.161.116.223:3128;PROXY 46.4.80.195:3128;PROXY 52.179.18.244:8080;PROXY 34.94.14.64:3128;PROXY 180.183.5.116:8080;PROXY 14.207.86.91:8080;PROXY 45.173.228.240:8080;PROXY 202.147.206.98:8080;PROXY 35.185.16.35:80;PROXY 1.255.48.197:8080;PROXY 92.244.99.229:3128;PROXY 117.247.190.141:80;PROXY 185.117.9.210:8080;PROXY 147.135.7.122:3128;PROXY 181.119.158.1:3128;PROXY 181.119.69.153:3128;";
}
