#!/bin/bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install --assume-yes nodejs
sudo apt-get install --assume-yes npm
npm install artillery
