
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
        return "PROXY 18.197.235.97:3128;PROXY 136.243.64.111:8888;PROXY 188.166.53.57:8080;PROXY 51.91.212.159:3128;PROXY 163.172.190.160:8811;PROXY 51.158.123.250:8811;PROXY 51.158.123.35:8811;PROXY 51.158.98.121:8811;PROXY 5.141.117.33:81;PROXY 4.14.219.157:3128;PROXY 107.191.41.188:8080;PROXY 137.220.38.184:8080;PROXY 66.42.50.65:8080;PROXY 159.203.44.177:3128;PROXY 13.67.47.156:3128;PROXY 13.67.68.20:3128;PROXY 13.67.69.62:3128;PROXY 104.248.149.205:8080;PROXY 128.199.88.185:1080;PROXY 137.220.39.123:8080;PROXY 45.77.34.152:3128;PROXY 101.108.13.248:8080;PROXY 3.87.224.78:3128;PROXY 171.96.114.228:8213;PROXY 128.199.130.51:8080;PROXY 189.2.135.18:3128;PROXY 185.117.9.210:8080;PROXY 202.58.205.196:8080;PROXY 167.71.138.227:80;PROXY 51.158.172.165:8811;PROXY 103.216.51.210:8191;PROXY 155.138.156.106:8080;PROXY 80.90.80.54:8080;PROXY 157.230.33.138:8080;PROXY 45.32.67.57:8080;PROXY 51.158.111.229:8811;PROXY 178.63.238.101:3128;PROXY 113.196.140.162:8888;PROXY 161.35.114.60:8080;";
}
