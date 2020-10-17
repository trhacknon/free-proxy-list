
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
        return "PROXY 85.14.243.31:3128;PROXY 91.214.179.5:8080;PROXY 95.217.186.24:3128;PROXY 159.203.44.177:3128;PROXY 185.117.9.210:8080;PROXY 34.201.197.136:3128;PROXY 1.255.48.197:8080;PROXY 62.171.177.113:8888;PROXY 14.139.107.211:3128;PROXY 117.247.190.141:80;PROXY 142.93.163.56:8080;PROXY 144.217.101.245:3129;PROXY 103.215.177.231:80;PROXY 181.119.69.153:3128;PROXY 85.113.39.89:81;PROXY 202.147.206.98:8080;PROXY 181.119.158.1:3128;";
}
