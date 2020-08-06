
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
        return "PROXY 130.61.95.193:3128;PROXY 35.195.138.97:3128;PROXY 62.171.177.125:5836;PROXY 62.171.177.194:5836;PROXY 51.89.32.83:3128;PROXY 207.180.215.74:3128;PROXY 51.68.71.95:3128;PROXY 176.118.149.11:8080;PROXY 80.39.55.103:8080;PROXY 80.90.80.54:8080;PROXY 52.179.18.244:8080;PROXY 91.214.179.5:8080;PROXY 159.203.44.177:3128;PROXY 94.102.2.145:3128;PROXY 5.141.117.33:81;PROXY 51.222.12.136:3128;PROXY 198.98.54.241:8080;PROXY 185.117.9.210:8080;PROXY 3.19.234.208:3128;PROXY 51.79.165.42:3128;PROXY 64.227.44.229:3128;PROXY 95.179.178.172:8080;PROXY 104.45.188.43:3128;PROXY 157.230.155.18:10492;PROXY 198.98.55.168:8080;PROXY 198.98.59.87:8080;PROXY 103.139.103.33:3131;PROXY 103.139.103.34:3131;PROXY 191.232.167.128:8080;PROXY 186.211.177.161:8082;PROXY 18.219.130.108:3838;PROXY 194.143.249.230:8080;PROXY 171.96.229.18:8080;PROXY 85.113.39.89:81;PROXY 62.171.177.184:5836;PROXY 189.2.135.18:3128;PROXY 177.36.128.162:8080;PROXY 165.227.36.43:3128;PROXY 89.223.28.195:3128;PROXY 146.88.36.54:8080;PROXY 59.124.224.180:3128;PROXY 79.137.44.85:3129;PROXY 3.19.238.16:8080;PROXY 78.141.201.90:33723;";
}
