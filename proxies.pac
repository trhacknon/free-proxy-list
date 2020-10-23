
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
        return "PROXY 176.9.85.13:3128;PROXY 95.216.196.233:3128;PROXY 85.14.243.31:3128;PROXY 85.25.15.202:3838;PROXY 51.75.147.41:3128;PROXY 51.161.116.223:3128;PROXY 51.222.71.90:1221;PROXY 64.137.175.85:3128;PROXY 185.117.9.210:8080;PROXY 104.149.139.206:3128;PROXY 194.5.188.193:3128;PROXY 216.250.236.10:3128;PROXY 45.159.115.56:3128;PROXY 83.171.98.167:3128;PROXY 182.253.168.126:8080;PROXY 23.237.74.98:3128;PROXY 103.35.64.12:3128;PROXY 186.211.177.161:8082;PROXY 117.247.190.141:80;PROXY 201.87.241.46:5555;PROXY 1.160.93.20:3128;PROXY 192.41.13.71:3128;PROXY 46.218.155.194:3128;PROXY 13.251.221.173:8080;PROXY 85.25.15.217:3838;";
}
