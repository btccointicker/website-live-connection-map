website-live-connection-map
===========================
Live connection map for your website. Making use of Datamaps(built on d3js), jquery and the socket.io library for node.js. 

This is a very simple example of what is possible by combining D3, jquery and socket.io to provide real time data to your users. 

Many thanks to the following people/groups:

* Mike Bostock - http://d3js.org/
* Mark DiMarco - http://datamaps.github.io/
* Stephen LaPorte and Mahmoud Hashemi - http://rcmap.hatnote.com/#en,de,ru,ja,es,fr
* The jquery team - https://jquery.org/team/
* Guillermo Rauch - http://socket.io/
* Ryan Dahl and Joyent, Inc - http://nodejs.org/
* Alexandre Fiori - https://freegeoip.net/

You are free to copy and distribute the code in this repository, however please include a credit to bitcointicker.co and even a link back to the website :-)

Please respect the licenses of the people and groups mentioned above. 

Hopefully this will be of some use to someone, at the very least as an example of how to use the above technologies. 

Running example can be seen at http://bitcointicker.co/map/

![alt tag](http://bitcointicker.co/map/map.png)

The install.sh script gives you an idea of how you can manually install the application, abstracting over the freegeoip install by using a docker image. You can however install freegeoip manually by following the instructions on https://freegeoip.net/. This script has been tested in Ubuntu 14.04. 

installMinimal.sh goes one step further and uses docker to run both freegeoip and the server.js socket.io application within their own docker containers. 
