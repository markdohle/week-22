# week-22
Three-Tiered Applications

In Module 22: Three-Tiered Applications, you’ll use HTTP to send data to the server and make updates. You’ll learn about the common tools and packages that’ll help you test and prototype an application. Finally, you’ll deploy your application to the cloud and test its APIs using Postman.

1. Initialize an Express server with all the necessary dependencies

2. Identify middleware functions
3. 

4. Discuss common development tools and packages
Deploy an application to the cloud

5. Test your deployed application with Postman

6. Discuss common deployment issues

## Links

[What Does Body-parser Do With Express?](https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express)

[How Body-parser Works](https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90)

[Body-parser npm](https://www.npmjs.com/package/body-parser)

[Faker.js](https://www.npmjs.com/package/faker)

[Chalk](https://www.npmjs.com/package/chalk)

[Moment](https://www.npmjs.com/package/moment)

[DigitalOcean](https://www.digitalocean.com)

[DigitalOcean Tutorials](https://www.digitalocean.com/community/tutorials)

[Free And Low-Cost Cloud Resources](https://digitalfellows.commons.gc.cuny.edu/free-and-low-cost-cloud-hosting-resources-for-students/)

[Using The AWS Free Tier Guide](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html)

[AWS Free Tier Limits](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)

[AWS Monthly Calculator](https://calculator.s3.amazonaws.com/index.html)

[Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html)

[Best Cloud Computing Services](https://www.techradar.com/web-hosting/best-bare-metal-hosting)

## Questions

What does init mean? It is short for initialize.

What Is Middleware?

Middleware is software that separates the [request](https://expressjs.com/en/4x/api.html#req) and [response] (https://expressjs.com/en/4x/api.html#res) body logic from the internals of the application itself, allowing developers more flexibility. Review the [Using Middleware](https://expressjs.com/en/guide/using-middleware.html)section of the Express documentation, then examine the graphic below.

In this example, “function (req, res)” is the middleware function that runs on the server. It tells the server to get the value of the users in the database, and then send that value as a response. 
```
app.get(‘/data’, function(req, res) {

  res.send(db.get(‘users’).value());

});
```
You’ve been using middleware without realizing it when writing route handlers or app.get/app.use functions.Just remember that middleware is any code that runs inside the request–response cycle and has access to the request–response object.

## Bugs

curl to test server not working.

```
mark@Katelyns-MacBook-Pro HTTP Post % curl -H "Content-Type: application/json" -X POST -d '{"username:"peterparker","password":"secret"}' http://localhost:3000/test
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>SyntaxError: Unexpected token p in JSON at position 12<br> &nbsp; &nbsp;at JSON.parse (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at parse (/Users/mark/Documents/week-22/three-tiered-application-self-study-activites_starter/HTTP Post/node_modules/body-parser/lib/types/json.js:89:19)<br> &nbsp; &nbsp;at /Users/mark/Documents/week-22/three-tiered-application-self-study-activites_starter/HTTP Post/node_modules/body-parser/lib/read.js:121:18<br> &nbsp; &nbsp;at invokeCallback (/Users/mark/Documents/week-22/three-tiered-application-self-study-activites_starter/HTTP Post/node_modules/raw-body/index.js:224:16)<br> &nbsp; &nbsp;at done (/Users/mark/Documents/week-22/three-tiered-application-self-study-activites_starter/HTTP Post/node_modules/raw-body/index.js:213:7)<br> &nbsp; &nbsp;at IncomingMessage.onEnd (/Users/mark/Documents/week-22/three-tiered-application-self-study-activites_starter/HTTP Post/node_modules/raw-body/index.js:273:7)<br> &nbsp; &nbsp;at IncomingMessage.emit (node:events:525:35)<br> &nbsp; &nbsp;at endReadableNT (node:internal/streams/readable:1358:12)<br> &nbsp; &nbsp;at processTicksAndRejections (node:internal/process/task_queues:83:21)</pre>
</body>
</html>
```

Test end points with Postman App if curl doesn't work

<p align="center">
  <img src="/step2-post-user/postman-Post.png" width="350" title="hover text">
</p>


### Video 22.1 Working With The Three Tiers

This week, you’ll continue to work with a three-tiered application. You’ll learn how to use HTTP POST, which will allow you to send data to a server and update a resource. You’ll also learn how to generate test data which will allow you to prototype quickly. Finally, you’ll learn how to deploy the application to the cloud.

### Video 22.2 Initialize Data Store

In this exercise, you’ll learn how to use HTTP POST to send data to a server. In this video, you’ll set up a project by adding packages and metadata for a Node application. Then you’ll initialize the data store, read it programmatically, and confirm the return of the data via the API.

This exercise uses [Lowdb version 1.0.0](https://www.npmjs.com/package/lowdb/v/1.0.0). Please beware of the potential differences between versions when reading Lowdb documentation.

When installing Lowdb via the command line use the command:

```npm install lowdb@1.0.0```

If installing Lowdb via package.json, use the following:

```"lowdb": "1.0.0”```

Use a cloud(DigitalOcean) for the sever and data store.

Client - Browser with HTML pages

Sever - run on Node

Data Store - CRUD Persistence, NPM packages Express and LowDB

Routs

1. Get all users - use mostly to confirm that code works
2. Post users
3. Listen for requests on port 3000

1. Create http_server.js file

Require NPM Packages
- Express
- LowDB
```
const express = require('express');
const app     = express();
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);
```

Initialize the data store
```
// init the data store
db.defaults({ users: []}).write();
```

Add a route to get all users. This is a ```get``` route.

```
// return all users
app.get('/data', function(req, res){     
    res.send(db.get('users').value());
});
```

Listen for requests

```
// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000!')
})
```

Open up the Terminal

```node http_server.js``` If modulous not found, we neeed install dependancies and create the data store.

Get the metadata fore the data store

```npm init``` to initialize

```cat package.json``` to see the file

Intall the NPM packages

```npm install express```

```npm install lowdb@1.0.0```

If the dependencies are already listed in ```cat package.json```, then run ```npm intall``` to install all dependendies at once.

### Video 22.3 HTTP POST

You’ve already used HTTP GET to pull data from a server. In this video, you’ll learn how to use HTTP POST to send the data that you collect in a form to a server.

When you write an HTTP POST, you’ll also use the body-parser package in Express. [Body-parser](https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express). is middleware that helps you manage incoming HTTP requests. Note that you may see deprecation warnings when importing body-parser. These can be ignored as it does not impact the functionality of the three-tiered application. 

Start by writing a simple route of username and password data to the server, then you’ll test it with curl code in the terminal. If you receive errors in your console when attempting to run the curl command, you can use [Postman](https://www.postman.com) to test your endpoints, as Command Line Interfaces (CLIs) can differ across operating systems. 

After watching this video, practice adding another route.

Use forms to POST data to the server.

- body-parser to interpret the code to extract data parameters. Use a simple route to confirm the POST to the server. Test using curl.

```
//-----Data parser - used to parse data (form data)----
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
```
```
//-------Route to confirm POST--------------------------
app.post('/test',function(req,res) {
    console.log(req.body.username, req.body.password);
});
```
- run the server with ```node htttp_server.js```. Then open a new terminal enter curl command. This will reach the server, but it also needs a response from the server.
     - denote that it is a post
     - set the data types to JSON
     - add an object
     - target url

```
//---------add a response from the server to the POST route---------
res.send(req.body.username + " " + req.body.password)
```

- curl command in a new terminal after running ```node http_server```

```
curl -H "Content-Type: application/json" -X POST -d '{"username:"peterparker","password":"secret"}' http://localhost:3000/test
```

- Create a route to add a new user
```
//------Route - Add User---------------------------
app.post('/add', function(req, res) {
    var user = {
        'name'          : req.body.name,
        'dob'           : req.body.dob,
        'email'         : req.body.email,
        'username'      : req.body.username,
        'password'      : req.body.password,
        'phone'         : req.body.phone,
        'streetaddress' : req.body.streetaddress,
        'citystatezip'  : req.body.citystatezip,
        'latitude'      : req.body.latitude,
        'longitude'     : req.body.longitude,
        'avatar'        : req.body.avatar,
    }
    db.get('users').push(user).write();
    console.log(db.get('users').value());
    res.send(db.get('users').value());
});
```




