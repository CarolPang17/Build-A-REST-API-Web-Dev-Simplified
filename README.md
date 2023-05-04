follow step from https://www.youtube.com/watch?v=fgTGADljAeg&t=345s

# Step 1 
#### start mongodb 
In Terminal directed to home:
1. brew services start mongodb/brew/mongodb-community
2. shoulde see "Successfully started `mongodb-community`"
   ![img!](https://user-images.githubusercontent.com/42502061/235592026-e5d3025f-0483-4ae4-9478-fe02262c2a8f.png)

# Step 2
#### intall dependencies & devDependencies
full code in commit "changing scripts test to devStart" 
In Terminal directed to the project folder:
1. npm init - y
2. npm i express mongoose
3. npm i --save-dev dotenv nodemon
4. change scripts in package.json to devStart <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235327162-b545e8e9-1380-46a0-9209-64e27d45d26b.png)
5. npm run devStart

# Step 3
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

# Step 4
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

# Step 5
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

# Step 6
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

# Step 7
#### create models
full code in commit "create models folder"
1. create models folder
2. in the models folder, create subscribers.js
3. in subscribers.js, put code 
   ```const mongoose = require('mongoose')```
   ![img!](https://user-images.githubusercontent.com/42502061/235589020-5c92fdcf-da63-4949-8d50-d6554a680b2f.png)

# Step 8
#### create Schema and connect to routes
full code in commit "create Schema and connect to routes"
1. in the models/subscribers.js, add skeleton code   <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235589605-ee5520d9-a151-4af5-a23e-1dfe09e735c2.png)

2. add requirement   <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235593305-14ec5e9c-a11a-4096-9240-e35e099be735.png)
3. exports the model by inputting <br />
   ```module.exports = mongoose.model('Subscriber', subscriberSchema)```
   which 'Subscriber' is the database name.  <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235591015-fc49132c-d5c7-48cf-ab20-44f36ec4ddfa.png)
4. require models to routes by adding 
   ```const Subscriber = require('../models/subscribers')``` <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235831640-8bebf9ca-3771-4fc9-a026-41cf76899ea4.png)


# Step 9
#### adding GET feature on routes
(14:30)in video
full code in commit 'GET feature setup'
1. replace the GET '/' section to 
    ```
    // Getting all
    router.get('/', async(req, res) => {
      try {
        const subscribers = await Subscriber.find()
      } catch (err) {
        res.status(500).json({message: err.message})
      }
    })
   ```
2. go to route.rest , click Send request on "GET http://localhost:3000/subscribers" <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235832885-0eaaa72c-024d-4395-bc79-1913133d656a.png)
3. we should see an emply array ,because we have no subscribership <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235832800-d8a33e95-97c1-4037-a7fc-90bb442bb60c.png)

# Step 10
#### adding post feature on routes
(16:10)in video
full code in commit 'add POST feature 2'

1. replace the POST '/' section to <br />
  ![img!](https://user-images.githubusercontent.com/42502061/235834712-7f6a33ce-430e-46a6-a39f-ba6caec8d5f8.png)
1. try out on route.rest by adding below code <br />
  ![img!](https://user-images.githubusercontent.com/42502061/235834835-4beb2243-eb77-4f05-bce4-fed5c50fc8b2.png)
1. click on Send Request
2. should see response like: <br />
   ![img!](https://user-images.githubusercontent.com/42502061/235834920-db15c59a-225b-40da-8f1a-6e581d995c23.png)

#### try out error message from POST
1. missing the "name" , only pass in "subscriberToChannel" in POST request <br />
    ![img!](https://user-images.githubusercontent.com/42502061/236118349-f7a218d5-2bef-43e1-add1-448b248c6180.png)
2. click Send Request
3. a "400" bad request will appear, and also a error message <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236119488-ccdbecf3-f5d3-4c89-85f9-0d883d992ebe.png)

# Step 11
#### set up Getting One request
(20:20) in video
full code in commit "Getting One request"
1. add below function in the botton on routes/subscribers.js  <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236122790-931097dd-cda1-417e-b74f-a759e5fcd0b7.png)
2. use this function in the Getting One request route  <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236123353-3459655c-eca8-40bb-9faa-b30cd2182725.png)

#### test out the request
1. pick up a subscribers id by send GET request  <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236123634-b8b82064-0df7-4a83-aab6-c506f8647ec1.png)
2. from the response , copy a id  <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236123833-564ba57f-5658-4da7-adbd-eaf62bb87f48.png)
3. put it to the end of a get request  <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236123982-b868eae1-dd72-4ec7-8dfc-434d9d3ff0fd.png)
4. click send request
5. will appear data for that id <br />
   ![img!](https://user-images.githubusercontent.com/42502061/236124236-b0c036df-7b31-4aae-b2a0-79ef32ec110e.png)
   


   




