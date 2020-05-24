
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
        return "PROXY 51.210.44.27:8080;PROXY 217.69.12.25:8080;PROXY 51.15.80.136:3128;PROXY 78.141.194.144:8080;PROXY 104.238.174.198:8080;PROXY 45.77.226.250:31844;PROXY 80.240.27.110:8080;PROXY 95.179.246.123:8080;PROXY 95.179.253.125:8080;PROXY 163.172.157.41:8080;PROXY 78.141.216.220:8080;PROXY 80.240.21.230:8080;PROXY 78.141.214.25:8080;PROXY 107.191.46.119:8080;PROXY 158.58.173.85:8080;PROXY 178.164.242.206:8080;PROXY 51.89.88.120:3128;PROXY 46.218.155.194:3128;PROXY 144.91.127.195:8080;PROXY 95.179.154.143:8080;PROXY 209.250.250.231:8080;PROXY 51.158.98.121:8811;PROXY 163.172.190.160:8811;PROXY 34.91.139.91:3128;PROXY 51.91.212.159:3128;PROXY 51.158.172.165:8811;PROXY 51.158.111.229:8811;PROXY 8.9.8.232:8080;PROXY 161.35.114.60:8080;PROXY 34.72.19.61:8080;PROXY 52.233.22.120:8080;PROXY 81.39.181.217:8080;PROXY 80.90.80.54:8080;PROXY 45.77.222.251:3128;PROXY 202.67.8.214:8080;PROXY 149.28.44.229:3128;PROXY 176.236.128.99:8080;PROXY 198.98.58.178:8080;PROXY 88.25.217.230:8080;PROXY 101.109.103.131:8080;PROXY 183.88.176.247:8080;PROXY 144.217.83.160:8080;PROXY 178.33.251.230:3129;PROXY 79.137.44.85:3129;PROXY 161.129.155.43:8080;PROXY 103.116.250.206:8080;PROXY 51.158.111.242:8811;";
}
