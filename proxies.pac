
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
        return "PROXY 95.179.249.113:8080;PROXY 45.76.89.82:8080;PROXY 136.243.64.111:8888;PROXY 82.119.170.106:8080;PROXY 5.2.72.101:3128;PROXY 51.91.212.159:3128;PROXY 5.2.72.110:3128;PROXY 107.191.41.188:8080;PROXY 192.162.244.145:3838;PROXY 91.214.179.25:8080;PROXY 134.249.158.34:81;PROXY 3.87.224.78:3128;PROXY 4.14.219.157:3128;PROXY 51.158.123.35:8811;PROXY 51.158.111.242:8811;PROXY 51.158.98.121:8811;PROXY 159.203.44.177:3128;PROXY 155.138.129.240:8080;PROXY 155.138.142.254:8080;PROXY 155.138.156.106:8080;PROXY 13.67.68.20:3128;PROXY 13.67.47.156:3128;PROXY 66.42.50.65:8080;PROXY 45.32.123.205:8080;PROXY 45.76.149.53:8080;PROXY 45.76.189.225:8080;PROXY 139.180.132.209:8080;PROXY 13.67.69.62:3128;PROXY 128.199.174.62:3128;PROXY 167.71.195.139:8080;PROXY 137.220.40.118:8080;PROXY 79.137.44.85:3129;PROXY 110.168.30.19:8080;PROXY 149.28.139.179:8080;PROXY 207.148.127.77:8080;PROXY 189.2.135.18:3128;PROXY 167.250.65.246:8080;PROXY 18.197.235.97:3128;PROXY 113.196.140.162:8888;PROXY 36.68.183.72:8080;PROXY 125.166.169.25:8080;PROXY 36.92.57.213:8080;PROXY 167.71.138.227:80;";
}
