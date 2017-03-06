## WOOHOO! Welcome to the Simpsons Todo Application

This my example project showcasing my React + Redux + React-Router + NodeJS + MongoDB integration and deployment via Docker.

## Best Way To Run The Project: USE DOCKER
- Install the latest version of docker & virtualbox and start a 'default' machine using ubuntu as your OS.  
- Install docker-compose
- Pull down the latest image for mongodb from dockerhub
- Pull down the latest image for NodeJS from dockerhub

### Run the following commands
```
git clone https://github.com/danieldram/simpsons-todo-app simpsons-todo-app
cd simpsons-todo-app
npm install
docker-machine start default
docker-machine env default
[paste the docker-shell command output ]
docker-compose build
docker-compose up -d
[navigate to http://localhost:3005 in your browser]
```

## Alternative Build/ Installation
- Install MongoDB on your host machine
- Run Mongod on port 3001


### Run following commands
```
git clone https://github.com/danieldram/simpsons-todo-app simpsons-todo-app
cd simpsons-todo-app
npm install
cd server
npm install
[edit .env file] -> change mongodb connection string to your localhost:3001 one
npm start
[navigate to http://localhost:3005]
```

# IF YOU HAVE ISSUES RUNNING / BUILDING PLEASE EMAIL danieldram@gmail.com
