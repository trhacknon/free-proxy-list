
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
        return "PROXY 130.211.56.12:3128;PROXY 95.216.16.237:3128;PROXY 79.140.30.186:3128;PROXY 85.113.39.89:81;PROXY 35.217.42.55:3128;PROXY 104.197.187.233:3128;PROXY 159.203.44.177:3128;PROXY 193.53.87.215:3128;PROXY 158.69.22.224:3128;PROXY 13.74.96.14:3128;PROXY 103.35.64.12:3128;PROXY 18.229.162.123:8888;PROXY 18.231.181.165:8888;PROXY 18.229.150.82:8888;PROXY 77.30.177.255:8080;PROXY 117.247.190.141:80;PROXY 221.138.194.186:3128;PROXY 51.161.116.223:3128;PROXY 45.11.180.186:3128;PROXY 54.233.196.11:8888;PROXY 85.100.233.37:3128;PROXY 167.250.65.246:8080;PROXY 82.200.233.4:3128;PROXY 201.48.214.229:8080;PROXY 59.124.224.180:3128;PROXY 35.185.16.35:80;PROXY 51.75.206.45:3128;";
}
