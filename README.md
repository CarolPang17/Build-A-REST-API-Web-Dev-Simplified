follow step from https://www.youtube.com/watch?v=fgTGADljAeg&t=345s

# Step 1 
#### intall dependencies & devDependencies
full code in commit "changing scripts test to devStart" 

In Terminal:
1. npm init - y
2. npm i express mongoose
3. npm i --save-dev dotenv nodemon
4. change scripts in package.json to devStart
   ![img!](https://user-images.githubusercontent.com/42502061/235327162-b545e8e9-1380-46a0-9209-64e27d45d26b.png)
5. npm run devStart

# Step 2 
#### create server.js file
full code in commit "adding express.json"

1. create server.js file
2. add code below in server.js file, 
3. see "Connected to Database" in Terminal

```
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.listen(3000, () => console.log('Server Started'))
```
   ![img!](https://user-images.githubusercontent.com/42502061/235326009-b1504346-d2a2-420f-9729-715f55dae609.png)

# Step 3
#### create and connect to routes
full code in commit "connected server and routes"

1. create routes folder 
2. in the routes folder , create subscribers.js
   ![img!](https://user-images.githubusercontent.com/42502061/235375675-d3e6f04f-bac7-4579-adf4-85e2942910d3.png)

3. add code in server.js
   ```
   const subscribersRouter = require('./routes/subscribers')
   app.use('/subscribers', subscribersRouter)
    ```
4. add code in subscribers.js
   ```
   const express = require('express')
   const router = express.Router()

   module.exports = router 
   ```
5. now we connected server.js and routes file
