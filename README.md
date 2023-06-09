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
(14:30)in video <br />
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
(16:10)in video <br />
full code in commit 'add POST feature 2'

1. replace the POST '/' section to <br />
  <img src="https://user-images.githubusercontent.com/42502061/235834712-7f6a33ce-430e-46a6-a39f-ba6caec8d5f8.png" width="400">
1. try out on route.rest by adding below code <br />
  <img src="https://user-images.githubusercontent.com/42502061/235834835-4beb2243-eb77-4f05-bce4-fed5c50fc8b2.png" width="400">
1. click on Send Request
2. should see response like: <br />
   <img src="https://user-images.githubusercontent.com/42502061/235834920-db15c59a-225b-40da-8f1a-6e581d995c23.png" width="400">

#### try out error message from POST
1. missing the "name" , only pass in "subscriberToChannel" in POST request <br />
    <img src="https://user-images.githubusercontent.com/42502061/236118349-f7a218d5-2bef-43e1-add1-448b248c6180.png" width="400">
2. click Send Request
3. a "400" bad request will appear, and also a error message <br />
   <img src="https://user-images.githubusercontent.com/42502061/236119488-ccdbecf3-f5d3-4c89-85f9-0d883d992ebe.png" width="400">

# Step 11
#### set up Getting One request
(20:20) in video <br />
full code in commit "Getting One request"
1. add below function in the botton on routes/subscribers.js  <br />
   <img src="https://user-images.githubusercontent.com/42502061/236122790-931097dd-cda1-417e-b74f-a759e5fcd0b7.png" width="400">
2. use this function in the Getting One request route  <br />
   <img src="https://user-images.githubusercontent.com/42502061/236123353-3459655c-eca8-40bb-9faa-b30cd2182725.png" width="400">

#### test out the request
1. pick up a subscribers id by send GET request  <br />
   <img src="https://user-images.githubusercontent.com/42502061/236123634-b8b82064-0df7-4a83-aab6-c506f8647ec1.png" width="400">
2. from the response , copy a id  <br />
   <img src="https://user-images.githubusercontent.com/42502061/236123833-564ba57f-5658-4da7-adbd-eaf62bb87f48.png" width="400">
3. put it to the end of a get request  <br />
   <img src="https://user-images.githubusercontent.com/42502061/236123982-b868eae1-dd72-4ec7-8dfc-434d9d3ff0fd.png" width="400">
4. click send request
5. will appear data for that id <br />
   <img src="https://user-images.githubusercontent.com/42502061/236124236-b0c036df-7b31-4aae-b2a0-79ef32ec110e.png" width="400">

# Step 12
#### set up and test Delete request
(24:40) in video <br />
full code in commit "set up and test Delete request"
1. add delete route code as below, we are using "deleteOne()" here , which is different with what the video had as "remove()", because the "remove()" is not working
   <br />
   <img width="498" alt="Screen Shot 2023-05-04 at 12 02 34 AM" src="https://user-images.githubusercontent.com/42502061/236134440-bcd37c9d-a100-43c7-89b3-5c47d86b08b6.png">
2. add a Delete testing route on route.rest file , and click send Request <br />
   <img width="514" alt="Screen Shot 2023-05-03 at 11 47 27 PM" src="https://user-images.githubusercontent.com/42502061/236130645-9fc36236-ea4a-4486-ad2f-1fa8be938be1.png">
3. Response show "Deleted Subscriber" <br />
   <img width="415" alt="Screen Shot 2023-05-03 at 11 58 06 PM" src="https://user-images.githubusercontent.com/42502061/236132535-dc10f610-dd80-4557-8ca0-9a4ebc679afe.png">
4. try get request on that id again <br />
   <img width="503" alt="Screen Shot 2023-05-04 at 12 00 08 AM" src="https://user-images.githubusercontent.com/42502061/236132892-f5ccabe6-d158-40b5-8e3c-68b05bf645ee.png">
5. Response show "Cannot find subscriber" because deleted successfully  <br />
   <img width="414" alt="Screen Shot 2023-05-04 at 12 00 03 AM" src="https://user-images.githubusercontent.com/42502061/236132899-aa258ebb-6ea0-4d1b-b1ae-7c183a6bb4f4.png">

# Step 13
#### set up and test Update Request
(26:10)in video  <br />
full code in commit "set up and test Patch Request"
1. add below code to patch route   <br />
   <img src="https://user-images.githubusercontent.com/42502061/236375406-73851d40-a2cd-4534-8f23-af9ce44fefdf.png" width="400">
2. go to route.rest and send GET request to get the id  <br />
   <img width="443" alt="Screen Shot 2023-05-04 at 9 14 43 PM" src="https://user-images.githubusercontent.com/42502061/236376578-df8668e7-5412-4d85-aeb7-8dcbf903013d.png">

3. copy the id  <br />
4. put the id to the end on patch request <br />
   <img width="526" alt="Screen Shot 2023-05-04 at 9 16 26 PM" src="https://user-images.githubusercontent.com/42502061/236376709-b0ab5675-3479-4981-898c-8e21873d847a.png">
5. now we want to update the "name" from "Harry Potter" to "Taco Ben" , to do that, input below code to route.rest . from line 22 - 26, every single line counted, the extra empty line on line 23 count too in order to make it work  <br />
   <img width="583" alt="Screen Shot 2023-05-04 at 9 18 31 PM" src="https://user-images.githubusercontent.com/42502061/236376916-49cb3460-ad74-415f-a430-8a81dd4e8c1f.png">

6. click on Send Request
7. Response show "name" updated as "Taco Ben"  <br />
   <img width="446" alt="Screen Shot 2023-05-04 at 9 22 01 PM" src="https://user-images.githubusercontent.com/42502061/236377213-391d6860-46b8-462d-a664-97e9b4ece693.png">
   

   




