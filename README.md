follow step from https://www.youtube.com/watch?v=fgTGADljAeg&t=345s

# Step 1 
#### intall dependencies & devDependencies
full code in commit "changing scripts test to devStart" 

In Terminal:
1. npm init - y
2. npm i express mongoose
3. npm i --save-dev dotenv nodemon
4. change scripts in package.json to devStart <br />
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
   <img src="https://user-images.githubusercontent.com/42502061/235326009-b1504346-d2a2-420f-9729-715f55dae609.png" width="400">

# Step 3
#### create and connect to routes
full code in commit "connected server and routes"

1. create routes folder 
2. in the routes folder , create subscribers.js <br />
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

# Step 4
#### adding routes features 
full code in commit "routes skeleton set up"

1. adding to do list in subscribers.js  <br />
   ```
   // Getting all
   // Getting One
   // Creating one
   // Updating One
   // Deleting One
   ```
2. adding basic skeleton configuration   <br />
      <img src="https://user-images.githubusercontent.com/42502061/235408869-dba758b3-8e20-41ed-babf-40a2924b7284.png" width="350">

# Step 5
#### testing if the routes is working 
full code in commit "testing first routes"
to test if the routes is working, we can :
1. had "REST Client" extension installed   <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235585196-5bdcab05-f0cb-4f4b-bb3e-1729cc1f5a23.png)
2. create a route.rest file
3. adding a respond send in GET
    ```
    // Getting all
    router.get('/',(req, res) => {
    res.send('Hello World')
    })
   ```
4. request http://localhost:3000/subscribers   <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235584822-07b6dc5d-00ad-4f33-9eee-717dc4a900d4.png)
5. click on Send Request 
6. and we should see the respond as 'Hello World' at the end   <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235584969-8646781c-1e27-48d9-9404-d4725c606cc9.png)

# Step 6
#### create models
full code in commit "create models folder"
1. create models folder
2. in the models folder, create subscribers.js
3. put code ```const mongoose = require('mongoose')``` in subscribers.js



