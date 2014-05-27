FROM    ubuntu:latest
MAINTAINER bitcointicker.co

RUN sudo apt-get -y install git
RUN sudo apt-get -y install nodejs
RUN sudo apt-get -y install npm
RUN npm install socket.io
RUN sudo apt-get -y  install nodejs-legacy
RUN sudo npm install forever -g

RUN git clone https://github.com/btccointicker/website-live-connection-map.git /srv
RUN touch /srv/socketio/out.log

EXPOSE  8080
CMD sed -i "s/localhost:8095/$GEOSRV_PORT_8080_TCP_ADDR:8080/g" /srv/socketio/server.js && forever -o /srv/socketio/out.log start /srv/socketio/server.js && tail -f /srv/socketio/out.log
