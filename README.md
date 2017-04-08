# Raspberry Pi connectivity using node-ssdp

### Raspberry Pi Configuration

The Pi is configured to auto connect to a laptop hotspot with given ssid and password

Things to note:

/etc/network/interfaces

source-directory /etc/network/interfaces.d

auto lo
iface lo inet loopback

iface eth0 inet manual

auto wlan0
allow-hotplug wlan0
iface wlan0 inet dhcp
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp


/etc/wpa_supplicant/wpa_supplicant.conf

network={
    ssid="rasp-pi"
    psk="raspberrypi"
    proto=RSN
    key_mgmt=WPA-PSK
    pairwise=CCMP
    auth_alg=OPEN
}

### Laptop Setup

Laptop hotspot configuration according to: http://www.redmondpie.com/how-to-turn-your-mac-into-a-wifi-hotspot-tutorial/  

Select wifi options:

 * **ssid:** rasp-pi
 * **password:** raspberrypi


run app.js on laptop

`node app.js`

then run client.js on rPi

`node client.js`

