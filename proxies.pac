
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
        return "PROXY 78.141.196.48:33643;PROXY 217.69.10.220:8080;PROXY 46.218.155.194:3128;PROXY 217.69.9.154:8080;PROXY 78.141.202.204:8080;PROXY 95.179.208.100:8080;PROXY 45.32.144.126:8080;PROXY 95.179.234.231:8080;PROXY 136.243.47.220:3128;PROXY 108.61.173.17:8080;PROXY 104.238.171.94:8080;PROXY 104.238.191.96:8080;PROXY 217.163.11.223:8080;PROXY 185.187.154.231:3128;PROXY 176.58.109.97:8888;PROXY 107.191.63.189:8080;PROXY 104.238.174.173:8080;PROXY 95.179.229.51:8080;PROXY 95.179.215.243:8080;PROXY 51.158.119.88:8811;PROXY 45.77.151.131:8080;PROXY 51.195.45.230:8080;PROXY 137.74.64.254:3128;PROXY 51.158.119.88:8761;PROXY 64.154.38.221:8080;PROXY 52.179.18.244:8080;PROXY 155.138.159.186:8080;PROXY 209.246.143.213:8080;PROXY 167.172.150.24:8080;PROXY 71.174.241.157:3128;PROXY 161.35.3.136:3128;PROXY 50.201.158.110:8080;PROXY 137.220.53.253:8080;PROXY 155.138.142.213:8080;PROXY 155.138.159.208:8080;PROXY 8.9.31.198:8080;PROXY 134.249.158.34:81;PROXY 155.138.144.206:8080;PROXY 149.248.55.12:8080;PROXY 52.191.103.11:3128;PROXY 34.125.94.232:3128;PROXY 45.76.74.237:8080;PROXY 45.77.86.166:8080;PROXY 89.223.28.195:3128;PROXY 178.128.127.145:3128;PROXY 139.180.218.181:8080;PROXY 45.76.158.37:8080;PROXY 45.76.144.71:8080;";
}
