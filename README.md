follow step from https://www.youtube.com/watch?v=fgTGADljAeg&t=345s

Terminal "
1. npm init - y
2. npm i express mongoose
3. npm i --save-dev dotenv nodemon
/  change in package.json :/
 "scripts": {
    "devStart": "nodemon server.js"
 }
4. npm run devStart