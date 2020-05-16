
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
        return "PROXY 188.165.16.230:3129;PROXY 93.157.66.57:3128;PROXY 167.172.43.26:8080;PROXY 136.243.47.220:3128;PROXY 51.91.212.159:3128;PROXY 157.245.66.51:8080;PROXY 51.143.131.170:3128;PROXY 3.8.226.158:8088;PROXY 217.160.64.48:3128;PROXY 95.217.130.87:3128;PROXY 209.97.138.116:8080;PROXY 77.55.218.3:3128;PROXY 80.211.65.43:3128;PROXY 31.17.19.19:3128;PROXY 80.90.80.54:8080;PROXY 91.237.201.150:8080;PROXY 207.148.23.141:8080;PROXY 198.255.114.82:3128;PROXY 136.169.164.4:8080;PROXY 35.223.35.156:3128;PROXY 165.22.36.75:8888;PROXY 134.249.158.34:81;PROXY 167.172.254.176:8080;PROXY 144.202.57.127:8080;PROXY 188.138.215.191:8080;PROXY 45.77.160.255:3128;PROXY 69.162.90.102:5836;PROXY 157.245.210.102:3128;PROXY 34.66.221.38:3128;PROXY 167.99.61.138:3128;PROXY 207.246.95.163:8080;PROXY 69.162.89.243:5836;PROXY 149.28.44.29:8080;PROXY 101.109.25.185:8080;PROXY 5.141.117.33:81;PROXY 155.138.159.113:8080;PROXY 155.138.146.236:8080;PROXY 34.105.51.55:80;PROXY 194.143.250.100:8080;PROXY 183.88.35.12:8213;PROXY 206.57.165.188:8080;PROXY 45.77.113.11:3128;PROXY 185.117.9.210:8080;PROXY 178.128.220.87:8123;PROXY 125.20.80.178:3129;PROXY 18.237.39.47:3128;PROXY 18.237.55.217:3128;";
}
