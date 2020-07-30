
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
        return "PROXY 94.130.135.39:5836;PROXY 136.243.47.220:3128;PROXY 35.189.90.214:3128;PROXY 80.187.140.74:8080;PROXY 51.68.71.95:3128;PROXY 51.178.165.3:3128;PROXY 80.90.80.54:8080;PROXY 52.179.18.244:8080;PROXY 5.141.117.33:81;PROXY 94.102.2.145:3128;PROXY 159.203.44.177:3128;PROXY 64.227.34.111:3128;PROXY 3.19.234.208:3128;PROXY 46.218.155.194:3128;PROXY 46.242.142.108:5836;PROXY 128.199.214.87:3128;PROXY 157.230.254.255:3128;PROXY 180.183.7.189:8080;PROXY 181.129.170.222:999;PROXY 186.211.177.161:8082;PROXY 200.6.176.74:3128;PROXY 45.236.171.69:999;PROXY 181.30.28.148:3128;PROXY 45.231.29.45:8080;PROXY 110.78.147.76:8080;PROXY 45.236.171.189:999;PROXY 189.2.135.18:3128;PROXY 45.76.42.210:33285;PROXY 189.8.32.204:3128;PROXY 95.179.228.41:30884;PROXY 1.255.48.197:8080;PROXY 89.223.28.195:3128;PROXY 144.217.101.245:3129;PROXY 199.195.252.161:8080;PROXY 200.255.122.170:8080;PROXY 51.15.78.19:8080;PROXY 103.78.75.92:80;";
}
