
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
        return "PROXY 176.9.85.13:3128;PROXY 167.71.74.143:8080;PROXY 46.101.227.25:8080;PROXY 135.181.41.246:8080;PROXY 188.166.93.156:8080;PROXY 188.166.94.118:8080;PROXY 167.71.142.240:8080;PROXY 209.97.129.90:8080;PROXY 51.89.32.83:3128;PROXY 206.189.20.12:8080;PROXY 161.97.65.52:3128;PROXY 134.209.24.86:8080;PROXY 85.14.243.31:3128;PROXY 80.90.80.54:8080;PROXY 161.35.59.6:8080;PROXY 167.172.155.217:8080;PROXY 68.183.112.133:8080;PROXY 159.89.55.157:8080;PROXY 89.187.181.71:3128;PROXY 159.203.44.177:3128;PROXY 67.205.141.168:8080;PROXY 51.81.84.238:8080;PROXY 50.17.139.35:3128;PROXY 185.117.9.210:8080;PROXY 188.166.210.210:8080;PROXY 178.128.54.44:8080;PROXY 34.94.11.175:3128;PROXY 178.128.115.201:8080;PROXY 159.89.203.135:8080;PROXY 128.199.112.211:8080;PROXY 128.199.143.208:8080;PROXY 206.189.88.97:8080;PROXY 128.199.105.239:8080;PROXY 45.82.245.34:3128;PROXY 104.211.230.17:3128;PROXY 183.89.149.18:8080;PROXY 125.164.57.3:8080;PROXY 1.255.48.197:8080;PROXY 186.211.177.161:8082;PROXY 60.50.46.136:8080;";
}
