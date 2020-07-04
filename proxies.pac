
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
        return "PROXY 51.158.119.88:8761;PROXY 51.158.119.88:8811;PROXY 4.14.219.157:3128;PROXY 52.179.18.244:8080;PROXY 62.171.177.80:3129;PROXY 198.98.54.241:8080;PROXY 64.188.3.162:3128;PROXY 64.71.145.122:3128;PROXY 209.232.103.41:8080;PROXY 189.2.135.18:3128;PROXY 202.67.8.214:8080;PROXY 157.230.155.18:10492;PROXY 51.254.237.77:3129;PROXY 187.130.75.77:3128;PROXY 209.141.52.48:8080;PROXY 195.154.42.163:7777;PROXY 82.200.233.4:3128;PROXY 134.249.158.34:81;PROXY 5.141.117.33:81;";
}
