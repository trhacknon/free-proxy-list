
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
        return "PROXY 185.20.224.239:3128;PROXY 51.75.206.45:3128;PROXY 79.156.227.170:3128;PROXY 45.32.64.33:3128;PROXY 134.249.134.41:3128;PROXY 66.96.237.43:3128;PROXY 213.80.237.142:3128;PROXY 15.206.50.74:3128;PROXY 117.247.190.141:80;PROXY 1.255.48.197:8080;PROXY 103.242.32.36:8080;PROXY 201.253.19.136:8080;PROXY 35.185.16.35:80;PROXY 150.95.153.41:3128;PROXY 79.110.52.229:2345;PROXY 189.112.82.29:3128;PROXY 14.207.80.201:8080;PROXY 181.119.158.1:3128;PROXY 45.76.150.145:8081;PROXY 181.119.69.153:3128;PROXY 185.117.9.210:8080;";
}
