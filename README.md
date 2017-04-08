# Raspberry Pi connectivity using node-ssdp

### Project Description

This project utilizes the SSDP protocol to send an unkown host address back to an express server running locally on a laptop with a SSDP server as well. By utilizing the SSDP connectivity, once a device is found it will send the host information to the express server, in which the express server will respond with a config.json file to configure the pi.

##### Todo

* Client.js needs to configure wifi, just prints response to console as of now

* User interface to run application, currently all CLI

* Add camera functionality on pi

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

