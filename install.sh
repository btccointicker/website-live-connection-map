#!/bin/sh
#Example install
#Taken from a fresh Ubuntu amazon ec2 instance running Ubuntu 14.04
#This will install to your home directory. For security reasons you may want to create a new user to run docker and socket.io within their own userspace
#Please use caution when running this in an existing environment, as it is intended to be used in a fresh environment with no existing configuration. 
#
#
#The author DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL the author BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
#
#

cd ~
sudo apt-get -y install docker.io
sudo docker.io run -d -p 8095:8080 allingeek/docker-freegeoip
sudo apt-get -y install nodejs
sudo apt-get -y install npm
npm install socket.io
sudo apt-get -y install apache2 php5
sudo apt-get -y install git
git clone https://github.com/btccointicker/website-live-connection-map.git

sudo mkdir /var/www/html/conf
sudo mkdir /var/www/html/map
sudo cp -R /home/$USER/website-live-connection-map/var/www/conf /var/www/html/
sudo cp -R /home/$USER/website-live-connection-map/var/www/map /var/www/html/
sudo cp -R /home/$USER/website-live-connection-map/var/www/example.php /var/www/html/example.php

#This appears to be required on ubuntu 14.04 for forever to be correctly installed
sudo apt-get -y  install nodejs-legacy

sudo npm install forever -g

forever start /home/$USER/website-live-connection-map/socketio/server.js

echo "#########################"
echo "You now need to edit /var/www/html/conf/conf.php and change connAddr to be the domain name or ip address of your server"
echo "#########################"

