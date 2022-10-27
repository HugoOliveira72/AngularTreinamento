# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]



FROM node:latest as angular
#Set the working directory
WORKDIR / app
#Copy frthe file from the current directory to working directory
COPY . .
#Run npm install & build the application
RUN npm install && npm run ng build
#Create the nginx stage for the serving the content
FROM nginx:alpine
#Set the working directory to nginx assets directory
WORKDIR /usr/share/nginx/html
#Renove
RUN rm -rf ./*
